const jwt = require('jsonwebtoken')
const axios = require('axios')
const asyncHandler = require('express-async-handler')


 const verify_google_reCaptcha = asyncHandler(async (token, res) => {
    if (token) {
      const googleVrifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;
      const response = await axios.post(googleVrifyUrl);
      const { success } = response.data;
      if (!success) {
        res.status(400);
        throw new Error("Failed captcha verification");
      }
    } else {
      throw new Error("something goes to wrong");
    }
  });
  
   const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
  };
  
  module.exports = generateToken;
  module.exports  = verify_google_reCaptcha;