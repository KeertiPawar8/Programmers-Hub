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

    try {
        const { name: titl, page = 1, limit = 100 } = req.query;
    
        if (req.query.titl == undefined) {
    
            let skip = (page - 1) * limit;
          let skippeddata = await QueModel.find().skip(skip).limit(limit);
          res.send(skippeddata);
        } else {
          let skip = (page - 1) * limit;
          let skippeddata = await QueModel.find({
            question: { $regex: req.query.titl, $options: "i" }
          })
            .skip(skip)
            .limit(limit);
    
          res.send(skippeddata);
        }
      } catch (err) {
        res.send(err.message);
      }

    })

    
    

    quesRouter.get("/answer/:id",authenticate,async(req,res)=>{

        const questionid = req.params.id;
        
    const answer = await QueModel.find({_id:questionid})
          res.send(answer)
        
        })
        



quesRouter.post("/addanswer/:id",authenticate,async(req,res)=>{

const questionid = req.params.id;

const {answer,userID,name,time} = req.body;

const checkuser = await QueModel.find({_id:questionid})

if(checkuser[0].userID == userID){
    res.send({msg:"You cannot answer the question published by you."})
}

else{

const result = await QueModel.updateOne({ "_id": questionid }, { $push: { "answer": { name, answer, userID,time} } })

const allanswer = await QueModel.find({"_id":questionid});
res.send(allanswer)

}

})



quesRouter.get("/showans",authenticate,async(req,res)=>{

    const answer = await QueModel.find({"_id":userID});
    res.send(answer)
    
    })





module.exports = {
    quesRouter
};

