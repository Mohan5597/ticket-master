const mongoose=require('mongoose')
const Schema=mongoose.Schema

const customerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    mobile:{
        type:String,
        length:10
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Customer=mongoose.model('Customer', customerSchema)
module.exports=Customer