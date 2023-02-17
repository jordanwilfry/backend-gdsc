const User = require("../models/user");
const bcrypt = require("bcryptjs");

const CreateUser = async (res, req) => {
  const hashedPassword = bcrypt.hash(req.body.password, 10);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {CreateUser};
