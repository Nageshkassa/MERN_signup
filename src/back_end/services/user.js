const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const User = require("../models/schema");

exports.register = async (req, res, next) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role)
    return res.status(400).send("Please fill in all the required fields!");
  try {
    const userObj = { email, role };
    const hashedPwd = await hash(password, 12);
    userObj.password = hashedPwd;
    const user = await new User(userObj).save();
    const token = sign(
      { user },
      process.env.JWT_SECRET,
      { expiresIn: 360000 }
    );
    return res.status(201).send(); // Only send the status code
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).lean();
    if (!user) return res.status(404).send("Invalid credentials");
    if (user.role !== "user")
      return res.status(404).send("Invalid credentials..");
    const isMatch = await compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");
    const token = sign({ user }, process.env.JWT_SECRET, { expiresIn: 360000 });
    return res.status(200).send(); // Only send the status code
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
