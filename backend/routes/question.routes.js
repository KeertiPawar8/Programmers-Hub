const express = require("express")
const quesRouter = express.Router();
const {authenticate} =require("../middlewares/auth.middleware")

quesRouter.post("/createquestion",authenticate,async(req,res)=>{

        console.log(req.body)
        res.send("question created")

})

module.exports = {
    quesRouter
};

