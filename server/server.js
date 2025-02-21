const express= require("express")
const cors = require("cors")
const dbConnect = require("./src/config/db")
const userRoute = require("./src/routes/user.routes")

const app= express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
const PORT = process.env.PORT

app.use('/api/users', userRoute)

app.listen(PORT, ()=>{
    dbConnect()
})