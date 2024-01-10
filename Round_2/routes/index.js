const express = require('express');
// const passport = require('passport');
const router = express.Router();
// const User = require('../models/user');


// Home Page
router.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname + '/../' });
    // res.sendFile(__dirname + '/views/index.html');
});


// Registration Page
// router.get('/register', (req, res) => {
//     res.sendFile('views/register.html', { root: __dirname + '/' });
// });

// router.post('/register', (req, res) => {
//     User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
//         if (err) {
//             console.error(err);
//             return res.redirect('/register');
//         }
//         passport.authenticate('local')(req, res, () => {
//             res.redirect('/dashboard');
//         });
//     });
// });


// Login Page
// router.get('/login', (req, res) => {
//     res.sendFile('views/login.html', { root: __dirname + '/../' });
// });

// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/login'
// }));


// Logout
// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });


// Contact Us Page
// router.get('/contact', (req, res) => {
//     res.sendFile('views/contact.html', { root: __dirname + '/../' });
// });

// router.post('/contact', (req, res) => {
//     // Handle form submission (store data in MongoDB, etc.)
//     console.log('Received contact form data:', req.body);
//     res.redirect('/');
// });


// Dashboard (Authenticated route)
// router.get('/dashboard', isLoggedIn, (req, res) => {
//     res.send(`<h1>Hello, ${req.user.username}!</h1><a href="/logout">Logout</a>`);
// });


// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
