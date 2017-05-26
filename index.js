const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencdeParser = bodyParser.urlencoded({extended:false});


app.set('view engine', 'ejs');
app.set('views', 'views')
app.get('/', (req,res)=> res.render('home'));

app.listen('3000', console.log('home'));