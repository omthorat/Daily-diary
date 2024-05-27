const User = require("../modules/userModule");
const genrateToken = require("../utiles/genrateToken");
const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user Is Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      pic: user.pic,
      token: genrateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("something went wrong!!");
  }
};
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      pic: user.pic,
      token: genrateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Email or Password is incorrect");
  }
};
module.exports = { registerUser, authUser };
