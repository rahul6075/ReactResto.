const express = require('express')
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./server/config/db');
const morgan = require('morgan')
const authRoute = require('./server/routes/user');
dotenv.config();


// middlewares


connectDB();
app.use(express.json());
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

//Routes
app.use("/api/users", authRoute);








const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on ${process.env.NODE_ENV}  on ${port}`);
})