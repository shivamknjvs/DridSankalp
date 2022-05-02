const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
var cookieParser = require('cookie-parser')
dotenv.config()
const app = express();
// const U ser = require('./model/userSchema')
app.use(express.json())
app.use(cookieParser())
app.use(require('./router/auth'))
app.use(require('./router/login'))
app.use(require('./router/notes'))
app.use(require('./router/quiz'))
app.use(require('./router/about'))

const DB =process.env.MONGO_LINK
mongoose.connect(DB).then( ()=>{
    console.log('fullfiled')
}) 
.catch((err)=>{
    console.log('no connect')
})
// const middleware =(req,res,next)=>{
//     console.log('this is middleware')
//     next()
// }

 

// app.get('/',(req,res) => {
     
//     res.send('hello world from the server');
// })

app.listen(4000, ()=>{
    console.log('listening successfully on 4000')
}) 