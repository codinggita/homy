const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true // Allow cookies to be sent
}));


// MongoDB Connection
const mongoURI = 'mongodb+srv://jatinrajwani19:Jkagency2024@cluster0.bwp2q.mongodb.net/';
const dbName = 'hostel_service';
let db;

// Connect to MongoDB
async function connectToMongoDB() {
    try {
      const client = new MongoClient(mongoURI);
      await client.connect();
      console.log('Authentication is Connected to MongoDB');
      db = client.db(dbName);
      
      // Create indexes for unique fields
      await db.collection('users').createIndex({ username: 1 }, { unique: true });
      await db.collection('users').createIndex({ email: 1 }, { unique: true });
    } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    }
  }


  // Initialize MongoDB connection
connectToMongoDB();

// Environment variables (use dotenv in production)
const JWT_SECRET = process.env.JWT_SECRET || 'defaultSecret';
const JWT_EXPIRES_IN =process.env.JWT_EXPIRES_IN || '7d';



// Register route
app.post('/api/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      
      // Check if user already exists
      const existingUser = await db.collection('users').findOne({
        $or: [{ email }, { username }]
      });
      
      if (existingUser) {
        return res.status(400).json({ 
          message: 'User with that email or username already exists' 
        });
      }
      
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      // Create new user
      const newUser = {
        username,
        email,
        password: hashedPassword,
        createdAt: new Date()
      };
      
      // Insert user into database
      await db.collection('users').insertOne(newUser);
      
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Registration error:', error);
      
      // Specific error handling for duplicate key errors
      if (error.code === 11000) {
        return res.status(400).json({ 
          message: 'Username or email already exists' 
        });
      }
      
      res.status(500).json({ message: 'Server error' });
    }
  });


  // Login route
  app.post('/api/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }
  
      // Ensure MongoDB is connected
      if (!db) {
        return res.status(500).json({ message: 'Database connection error' });
      }
  
      // Find user in database
      const user = await db.collection('users').findOne({ username });
      console.log('🔍 User found:', user);
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Validate password
      console.log('🔑 Entered password:', password);
      console.log('🔑 Stored hashed password:', user.password);
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Create JWT token
      const token = jwt.sign(
        {
          userId: user._id.toString(),
          username: user.username,
          email: user.email
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN } // ✅ Fixed syntax error
      );
  
      console.log('🛡️ JWT Secret:', JWT_SECRET);
      console.log('🔐 Token Generated:', token);
  
      // Send token as HTTP-only cookie
      res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600000 // 1 hour
      });
  
      // Send response
      res.json({
        message: '✅ Login successful',
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        }
      });
  
    } catch (error) {
      console.error('❌ Login error:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  

  // Authentication middleware
const authenticateToken = (req, res, next) => {
    // Get token from cookies or Authorization header
    const token = req.cookies.jwt || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    
    try {
      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded; // Add user data to request
      next();
    } catch (error) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
  };





  const PORT = process.env.PORT || 5500;
  app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});