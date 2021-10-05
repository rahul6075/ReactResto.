const {check} = require('express-validator')

 const signupValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Need strong password of minimum character 6"),
];

 const signinValidator = [
  check("email").isEmail().withMessage("Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Need strong password of minimum character 6"),
];

 const profileValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
];

module.exports = signupValidator;
module.exports = signinValidator;
module.exports = profileValidator;