const express = require("express")
const quesRouter = express.Router();
const {authenticate} =require("../middlewares/auth.middleware")
const {QueModel} = require("../models/question.model")



quesRouter.post("/createquestion",authenticate,async(req,res)=>{
const payload = req.body
const question = new QueModel(payload)
await question.save()
    
        res.send({msg:"question created"})

})


quesRouter.get("/allquestions",authenticate,async(req,res)=>{

    const allques = await QueModel.find();
    res.send(allques)
    
    })


quesRouter.post("/answer/:id",authenticate,async(req,res)=>{

const questionid = req.params.id;

const {answer,userID,name} = req.body;

const result = await QueModel.updateOne({ "_id": questionid }, { $push: { "answer": { name, answer, userID} } })

res.send("answer has been added")

})


module.exports = {
    quesRouter
};

