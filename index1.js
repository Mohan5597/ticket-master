const express=require('express')
const cors=require('cors')

const app=express()
const port=3005


app.use(cors())

app.get('/students',(req,res) =>{
    const students=[
        {id:1, name:'mahesh'},
        {id:2, name:'veeresh'}
    ]
    res.json(students)
})


app.listen(port,() =>{
    console.log('listening to port',port)
})