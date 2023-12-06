// require('dotenv').config();
// const express = require("express");
// const jwt =require("jsonwebtoken");
// const port = 3000
// const app = express();
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.json({
//         message: "Welcome to this API server"
//     });
// });
// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     console.log("email is ",email);
//     // console.log(req.headers["authorization"]);
//     const user = { email:email,password:password};
//     jwt.sign({ user: user }, process.env.SECRET, (err, token) => {
//         res.json({
//             token// we ge the token as response from jwt 
//         });
//     });
// });

// function verifyToken(req, res, next) {
//     console.log("from verify ", req);
//     const bearerHeader = req.headers["authorization"];
//     if(typeof bearerHeader !== "undefined") {
//         const bearerToken = bearerHeader.split(" ")[1];
//         req.token = bearerToken;
//         next();
//     } 
//     else {
//         res.sendStatus(403);
//     }
// }

// app.post("/api/posts", verifyToken, (req, res) => {
//     //to get data got in header and add the header of Authorization : Beare token(that is generated while login route) 
//     //now click post you will get the data (credential)
//     jwt.verify(req.token, "mysecret", (err, authData) => {//here jwt  give token as we are passed our secret key and it will verify 
//     if(err) {
//         res.sendStatus(403);
//     } 
//     else {
//         res.json({
//             message: "POST created...",
//             authData
//         });
//     }
//     });
// });

// app.listen(port, () => {
//     console.log(`App running on port ${port}`)
// })

const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cors = require("cors");
require("colors");

// Load environment variables from .env file
dotenv.config();

const db = require("./config/db");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

// Connect to MongoDB
db(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/login", require("./controller/user"));
