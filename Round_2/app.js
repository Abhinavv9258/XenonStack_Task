const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const passport = require('passport');
// const session = require('express-session');
// const LocalStrategy = require('passport-local').Strategy;
// const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3000;


// // Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static('public'));


// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/myDB', { useNewUrlParser: true, useUnifiedTopology: true });

// var db = mongoose.connection;

// mongoose.connection.on("disconnected", () => {
//     console.log("MongoDB connection disconnected.");
// });

// mongoose.connection.on("connected", () => {
//     console.log("MongoDB connection connected.");
// });

// // Passport Configuration
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
