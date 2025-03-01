const express=require('express');
const app=express();
const cors=require("cors");
const PORT=5000;

const {MongoClient}=require("mongodb");// Use To connect With Database

const uri="mongodb+srv://jatinrajwani19:Jkagency2024@cluster0.bwp2q.mongodb.net";
const client= new MongoClient(uri,{ useUnifiedTopology: true });

const dbName = "hostel_service";
let db,collection;
async function connectDB() {
    try{
        await client.connect();//Conect To MongoDb
        db = client.db(dbName);
        collection=db.collection("meal");
        console.log('connect to mongodb');
    }catch(error){
        console.log('Error connect to mongodb',error);// For Finding the error 
    }
    
}
connectDB();


app.use(cors());// For Enabling cors For all Requests


// Middleware to parse JSON
app.use(express.json());


// app.use(
//     cors({
//       origin: "http://localhost:3000",  Allow requests only from this origin
//       methods: ["GET", "POST", "PUT", "DELETE"],  Allowed request methods
//       allowedHeaders: ["Content-Type", "Authorization"],  Allowed headers
//     })
//   );



//Api Routing to fetch the hostel.
app.get('/meals', async (req, res) => {
    try {
        const meals = await collection.find().toArray();

        // Calculate the average rating for each meal
        const mealsWithRatings = meals.map((meal) => {
            const avgRating = meal.ratings && meal.ratings.length > 0 
                ? meal.ratings.reduce((a, b) => a + b, 0) / meal.ratings.length 
                : 0;

            return { ...meal, avgRating: avgRating.toFixed(1) }; // Limit decimal places
        });

        res.json(mealsWithRatings); // Sending updated data
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});


// app.get('/meals/:id',async(req,res)=>{
//     try{
//         const name=req.params.id;
//         console.log(name)
//         const meals=await collection.findOne({name});
//         res.status(200).json(meals);
//     }catch(error){
//         res.status(500).json({error:"internal server not working"});
//     }
    
// })

const { ObjectId } = require("mongodb");

app.get('/meals/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Validate ObjectId format
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const meal = await collection.findOne({ _id: new ObjectId(id) });//Here By Using this newobjectId(id) we can convert the id into the objectId.

        if (!meal) {
            return res.status(404).json({ error: "Meal not found by meal section" });
        }

        res.status(200).json(meal);
    } catch (error) {
        console.error("Internal Server Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});






app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});


