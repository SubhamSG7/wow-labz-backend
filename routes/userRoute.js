const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require('../models/registerSchema');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Handling User Registration
router.post('/SignIn', (req, res) => {
    const { name, address, email, phoneNumber, password } = req.body;
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            // Store hash in your password DB.
            if (err) {
                res.json({ message: 'failed' }).status(403);
            } else {
                try {
                    const newuser = await user.create({
                        name: name,
                        email: email,
                        password: hash,
                        phoneNumber: phoneNumber,
                        address: address
                    })
                    res.json({ message: 'success' }).status(201)
                    console.log(newuser);
                } catch (error) {
                    res.json({ message: 'failed' }).status(403)
                }
            }
        });
    });

});

// Handling User Login
router.post('/LogIn', async (req, res) => {
    const { email, password } = req.body;
    try {
        const fetchUser = await user.find({ email: email });
        if (fetchUser.length == 0) res.json({ message: 'failed' }).status(403)
        else {
            bcrypt.compare(password, fetchUser[0].password, function (err, result) {
                // result == true
                if (err) {
                    res.json({ message: 'failed', err }).status(403)
                }
                if (result) {
                    res.json({ message: 'success',email:email }).status(201)
                }
                else {
                    res.json({ message: 'failed' }).status(403)
                }
            });
        }
    } catch (error) {
        res.json({ message: 'failed' }).status(403)
    }
});

module.exports = router;
