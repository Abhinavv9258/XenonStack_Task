const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const routes = require('./routes');
const contactRoute = require('./routes/contactRoute');

const app = express();
const PORT = process.env.PORT || 3000;


// // Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
}));


// // MongoDB Connection
const uri = "mongodb+srv://user:demo@cluster0.poliyjx.mongodb.net/odyssey_routes?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB connection disconnected.");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connection connected.");
});

// Routes
app.use('/', routes);
app.use('/contact', contactRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
