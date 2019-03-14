const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/farmer');
const models = require('./models/model');
const auth = require('./routes/auth');
const mongoose = require('mongoose');
const session = require('express-session');


//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/x-www-form-urlencoded

//Parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

mongoose.connect('mongodb://localhost:27017/seheyogi', {useNewUrlParser: true});
mongoose.set('debug', true);

require('./models/Users');
require('./util/passport');
const authroutes = require('./routes/index');

app.use(routes);
app.use(auth.router);
app.use(authroutes);

app.use('/home',(req,res,next)=>{
    res.redirect('/');
});

app.use((req,res,next)=>{
    res.send('<h1>Page Not Found</h1>')
});

app.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
})