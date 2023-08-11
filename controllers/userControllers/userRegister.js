const User = require("../../models/userModel");
const uuid = require("uuid").v4;
const AppError = require("../../helpers/AppError");
const generateAvatarUrl = require("../../services/gravatarGen");
const nodemailerService = require("../../services/nodemailerService");
module.exports = async (req, res, next) => {
  try {
    const userExists = await User.exists({
      email: req.body.email,
    });
    if (userExists) {
      throw AppError(409, "Email already in use");
    }
    const avatarUrl = generateAvatarUrl(
      req.body.email
    );
    const verificationToken = uuid();
    const newUser = {
      ...req.body,
      avatarUrl,
      verificationToken,
    };
    await User.create(newUser);
    await nodemailerService(
      newUser,
      "localhost:3000"
    );
    newUser.password = undefined;
    res.status(201).json({
      msg: "Succes",
      newUser,
    });
  } catch (error) {
    next(error);
  }
};
