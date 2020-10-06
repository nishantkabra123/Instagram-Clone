const express=require('express')

const app=express()

const mongoose=require('mongoose')
const port=5000

const{MONGOURI}=require('./keys')

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

mongoose.connect(MONGOURI,{
     useNewUrlParser: true,
     useUnifiedTopology: true
})


mongoose.connection.on('connected',()=>{
    console.log("connected to mongo",)
})

mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})

app.listen(port,()=>{

    console.log("listening on port ",port)
})