import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectionToDB.js';

dotenv.config();
const PORT = process.env.PORT||8000;
const app = express();

//app.use(cors());
app.use(express.json());


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is connecting and running on port ${PORT}`)
})

