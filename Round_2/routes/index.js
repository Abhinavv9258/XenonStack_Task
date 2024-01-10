const express = require('express');
const router = express.Router();
const { register, login, logout } = require('./controllers/userController');

// Home Page
router.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname + '/../' });
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
    // res.sendFile(__dirname + '/views/index.html');
});


// Registration Page
router.get('/register', (req, res) => {
    res.sendFile('public/register.html', { root: __dirname + '/../' });
});

// router.post('/register', (req, res) => {

//     var name = req.body.name;
//     var email = req.body.email;
//     var username = req.body.username;
//     var password = req.body.password;
//     var phone_no = req.body.phone_no;

//     var data = {
//         "name": name,
//         "email": email,
//         "username": username,
//         "password": password,
//         "phone_no": phone_no
//     }
    
//     db.collection('users').insertOne(data,(err,collection) => {
//         if(err){
//             throw err;
//         }
//         console.log("Record Inserted Successfully.")
//     })
//     // User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
//     //     if (err) {
//     //         console.error(err);
//     //         return res.redirect('/register');
//     //     }
//     //     passport.authenticate('local')(req, res, () => {
//     //         res.redirect('/dashboard');
//     //     });
//     // });
//     return res.redirect('login.html');
// });


// Login Page
router.get('/login', (req, res) => {
    res.sendFile('public/login.html', { root: __dirname + '/../' });
});

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
router.get('/contact', (req, res) => {
    res.sendFile('public/contact.html', { root: __dirname + '/../' });
});

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

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login');
// }


router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
