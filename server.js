const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/urShortner',{
    useNewUrlParser:true , useUnifiedTopology:true
})

app.set('view engine','ejs')
//Event listener
app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/shortUrls',(req,res)=>{

})

app.listen(process.env.PORT || 5000) 


