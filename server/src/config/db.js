const {connect, model}=require("mongoose")
require("dotenv").config()
const dbConnect= async ()=>{
    try {
        await connect(process.env.Db_Url)
        console.log("mongodb connected succesfully");
    } catch (error) {
        console.log("mongodb connection error", error);

    }
}

module.exports =dbConnect