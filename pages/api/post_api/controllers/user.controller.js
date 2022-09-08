const { v4: uuidv4 } = require("uuid");

const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      address: req.body.address,
      location: req.body.location,
      bed: req.body.bed,
      bath: req.body.bath,
      area: req.body.area,
      status: req.body.status,
      price: req.body.price,
      type: req.body.type,
      description: req.body.description,
      approval_status: req.body.approval_status,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    if (req.body.name) {
      user.name = req.body.name;
    }
    if (req.body.phonenumber) {
      user.phonenumber = req.body.phonenumber;
    }
    if (req.body.address) {
      user.address = req.body.address;
    }
    if (req.body.location) {
      user.location = req.body.location;
    }
    if (req.body.bed) {
      user.bed = req.body.bed;
    }
    if (req.body.bath) {
      user.bath = req.body.bath;
    }
    if (req.body.area) {
      user.area = req.body.area;
    }
    if (req.body.status) {
      user.status = req.body.status;
    }
    if (req.body.price) {
      user.price = req.body.price;
    }
    if (req.body.type) {
      user.type = req.body.type;
    }
    if (req.body.description) {
      user.description = req.body.description;
    }
    if (req.body.approval_status) {
      user.approval_status = req.body.approval_status;
    }
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
