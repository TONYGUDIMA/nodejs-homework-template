const AppError = require("../../helpers/AppError");
const User = require("../../models/userModel");
const nodemailerService = require("../../services/nodemailerService");

module.exports = async (req, res) => {
  try {
    if (!req.body.email) {
      throw AppError(400, "Email is required");
    }

    const user = await User.findOne({
      email: req.body.email,
    });
    if (user.verify) {
      res.status(400).json({
        message:
          "Verification has already been passed",
      });
    }
    await nodemailerService(
      user,
      "localhost:3000"
    );
    res.status(200).json({
      msg: "Verification Email has been send",
    });
  } catch (error) {
    console.log("error", error);
  }
};
