const User = require("../models/user");
const bcrypt = require("bcryptjs");

const CreateUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(hashedPassword);

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

const UpdateUser = async (req, res) => { 
    if(req.body.password){
      try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
      } catch (error) {
        console.log(error)
      }
    }

    try {
      findUser = await User.findByIdAndUpdate(req.params.id, {})
    } catch (error) {
      res.status(500).json(error)
    }

}

module.exports = { CreateUser };
