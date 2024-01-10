const bcrypt = require('bcrypt');
const User = require('../../models/user');

const register = async (req, res) => {
    try {
        const { username, password, name, phone_number, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            password: hashedPassword,
            name, 
            phone_number, 
            email
        });
        await user.save();
        res.send('Registration successful!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user && await bcrypt.compare(password, user.password)) {
            req.session.userId = user._id;
            res.send('Login successful!');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Logout successful!');
        }
    });
};

module.exports = { register, login, logout };
