const {
  contactsValidationSchema,
} = require("../helpers/contactsValidator");
const AppError = require("../helpers/AppError");
exports.checkContactData = async (
  req,
  res,
  next
) => {
  try {
    const { error, value } =
      contactsValidationSchema(req.body);
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
