const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const farmerRoutes = require('./routes/farmer');



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));    

app.use(farmerRoutes);
app.use('/homepage',(req,res,next)=>{
    res.redirect('/');
});

app.use((req,res,next)=>{
    res.send('<h1>Page Not Found</h1>')
});

app.listen(3000);