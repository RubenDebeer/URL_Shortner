const express = require('express')
const app = express()

app.set('view engine','ejs')
//Event listener
app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(process.env.PORT || 5000);


