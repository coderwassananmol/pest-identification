const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/farmer');
const models = require('./models/model');
const auth = require('./routes/auth')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(auth);

app.use('/home',(req,res,next)=>{
    res.redirect('/');
});

app.use((req,res,next)=>{
    res.send('<h1>Page Not Found</h1>')
});

app.listen(3000);