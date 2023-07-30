const { Router } = require("express");
const router = Router();
const {
  checkUserData,
} = require("../../middlewares/usersMiddlewares");
const {
  userRegister,
  userLogin,
  userLogout,
  getCurrentUser,
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
module.exports = router;
