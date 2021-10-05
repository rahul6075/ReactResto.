const User = require('../models/User')
const asyncHandler = require('express-async-handler')
const {generateToken} = require('../utils/Utils')

// @desc  POST register new user
// @router POST /api/users
// @access public

const registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body; 
    const userExists = await User.findOne({ email }).exec();
    if (userExists) {
     return res.status(400);
      throw new Error("user already exists");
    }
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
       return res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        });
      } else {
       return res.status(400);
        throw new Error("invalid user data");
      }
});


module.exports = registerUser;