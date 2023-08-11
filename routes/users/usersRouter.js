const { Router } = require("express");
const router = Router();
const {
  checkUserData,
  uploadAvavtar,
} = require("../../middlewares/usersMiddlewares");
const {
  userRegister,
  userLogin,
  userLogout,
  getCurrentUser,
  userUpdate,
  userVerify,
  sendVerificationEmail
} = require("../../controllers/userControllers");
const {
  protect,
} = require("../../middlewares/authMiddlewares");

router.post(
  "/register",
  checkUserData,
  userRegister
);
router.post("/login", checkUserData, userLogin);
router.post("/logout", protect, userLogout);
router.get("/current", protect, getCurrentUser);
router.post('/verify', sendVerificationEmail)
router.get(
  "/verify/:verificationToken",
  userVerify
);
router.patch(
  "/avatars",
  protect,
  uploadAvavtar,
  userUpdate
);
module.exports = router;
