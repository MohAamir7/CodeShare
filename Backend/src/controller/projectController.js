import express from 'express'
// import router from '../routes/V1';
const Createproject = express.Router();

Createproject.post('/',(req,res)=>{
    return res.json({message:"project created"});
})

export default Createproject;