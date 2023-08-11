const userRegister = require("./userRegister");
const userLogin = require("./userLogin");
const userLogout = require("./userLogout");
const getCurrentUser = require("./getCurrentUser");
const userUpdate = require("./userUpdateAvatar");
const userVerify = require("./userVerify");
const sendVerificationEmail = require("./sendVerificationEmail");
module.exports = {
  userRegister,
  userLogin,
  userLogout,
  getCurrentUser,
  userUpdate,
  userVerify,
  sendVerificationEmail,
};
