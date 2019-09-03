const mongoose=require('mongoose')
const Schema=mongoose.Schema

const employeeSchema=new Schema({
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

    department:{
        type:Schema.Types.ObjectId,
        ref:'Department'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Employee=mongoose.model('Employee', employeeSchema)
module.exports=Employee