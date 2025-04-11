const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "your_jwt_secret_here"; // keep in .env later

exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  res.status(201).json({ message: "User Registered Successfully" });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token, user });
};
