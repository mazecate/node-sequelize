const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users)
    if (users.length === 0) {
      res.json("no user");  
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHello = async (req, res) => {
  try {
    res.json("Hello world");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};