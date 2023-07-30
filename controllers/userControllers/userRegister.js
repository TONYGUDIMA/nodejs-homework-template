const User = require("../../models/userModel");

const AppError = require("../../helpers/AppError");
module.exports = async (req, res, next) => {
  try {
    const userExists = await User.exists({
      email: req.body.email,
    });
    if (userExists) {
      throw AppError(409, "Email already in use");
    }
    const newUser = await User.create(req.body);
    newUser.password = undefined;
    res.status(201).json({
      msg: "Succes",
      newUser,
    });
  } catch (error) {
    next(error);
  }
};
