const express = require('express');
const mongoose = require('mongoose');
// adding passport.js for user authentication
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user/User.js');


const app = express();
const PORT = process.env.PORT || 3000;



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
    // initialize passport and express session
    app.use(require('express-session')({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// test get route 

app.get('/', (req, res) => {
    res.json('hello world')
})


// connect to db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/buzzkillR');

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});