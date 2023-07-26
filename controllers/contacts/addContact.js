const Contact = require("../../models/contactsModel");
const AppError = require("../../helpers/AppError");
const {
  contactsValidationSchema,
} = require("../../helpers/contactsValidator");

exports.addContact = async (req, res, next) => {
  try {
    const { error, value } =
      contactsValidationSchema(req.body);
    if (error) {
      throw AppError(404, error.message);
    }
    const result = await Contact.create(value);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
