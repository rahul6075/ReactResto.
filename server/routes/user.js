const express = require('express')
const router = express.Router();
const {signupValidator} = require('../validators/user')
const {runValidation} = require('../middlewares/auth')
const {registerUser} = require('../controllers/user')


router.post("/signup", signupValidator, runValidation, registerUser);



module.exports = router;