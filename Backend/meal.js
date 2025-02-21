const express=require('express');
const app=express();
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


//Api Routing to fetch the hostel.
app.get('/meals',async(req,res)=>{
    try{
     const meals= await collection.find().toArray();
        res.json(meals); // sending data
    }catch(error){
        res.status(500).json({error:"internal server not working"});
    }
});

app.get('/meals/:name',async(req,res)=>{
    try{
        const name=req.params.name;
        const meals=await collection.findOne({name});
        res.status(200).json(meals);
    }catch(error){
        res.status(500).json({error:"internal server not working"});
    }
    
})
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});