const express = require("express")
require("dotenv").config()
const {connection} = require("./db")
const {userRouter} = require("./routes/user.route")
const {quesRouter} = require("./routes/question.routes")
const cors = require("cors")
const app = express();
app.use(express.json())
app.use("/",userRouter)

app.use("/",quesRouter)
app.use(cors())



app.listen(8080,async()=>{
    await connection
    console.log(`server is running at port ${process.env.port}`)
       
})

