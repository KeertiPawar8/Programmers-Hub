const mongoose = require("mongoose")

const queSchema  = mongoose.Schema({
topic:{type:String,required:true},
question:{type:String,required:true},
userID: {type:String,required:true},
answer:{type:Array,default:[]},
})

const QueModel = mongoose.model("question" , queSchema)

module.exports = {
    QueModel
}
