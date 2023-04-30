const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/login',(req,res)=>{
    res.render('page-login');
});

app.get('*',(req,res)=>{
    res.render('page-error-404');
});


app.listen(port,()=>{
    console.log('Serviodr corriendo en el puerto: ',port);
  });