const {
  usersValidationSchema,
} = require("../helpers/usersValidator");
const AppError = require("../helpers/AppError");
exports.checkUserData = async (
  req,
  res,
  next
) => {
  try {
    const { error, value } =
      usersValidationSchema(req.body);
    if (error) {
      throw AppError(404, error.message);
    } else {
      req.body = value;
      next();
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
