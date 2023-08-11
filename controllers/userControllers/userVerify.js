const AppError = require("../../helpers/AppError");
const User = require("../../models/userModel");

module.exports = async (req, res) => {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({
      verificationToken,
    });
    if (!user) {
      throw AppError(400, "Not found");
    }
    user.verify = true;
    user.verificationToken =
      "Verification Passed";
    await user.save();
    res.status(200).json({
      msg: "Verification succesfull",
    });
  } catch (error) {
    console.log(error);
  }
};
