const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/js'));


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");
// hbs.registerHelper('manulist', ['home', 'about', 'contact', 'services', 'blogs']);
// app.set('views', path.join(__dirname, "/views"));

// make connetion with mysqli database 
const con = require('./config/connection');
app.get('/', (req, res) => {
    // how to pass dynamic data in node js. 
    res.render('home', {
        addData: {
            author: 'Janith Kasun',
            image: '',
            comments: ["super", "nice"]
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/feature', (req, res) => {
    res.render('features');
});

// use public folder static files 
app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/signup', (req, res) => {
    res.render('user_registraion');
});

app.get('/user_register', (req, res) => {
    res.render('get value from database');

});


app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`app is running on localhost:${PORT}`);
});
