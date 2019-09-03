const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ticketSchema=new Schema({
    message:{
        type:String
    },
    priority:{
        type:String
    },
    ticketCode:{
        type:String
    },
    isCompleted:{
        type:Boolean,
        default:false
    },

    department:{
        type:Schema.Types.ObjectId,
        ref:'Department'
    },
    customer:{
        type:Schema.Types.ObjectId,
        ref:'Customer'
    },
    employee:{
        type:Schema.Types.ObjectId,
        ref:'Employee'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Ticket=mongoose.model('Ticket', ticketSchema)
module.exports=Ticket