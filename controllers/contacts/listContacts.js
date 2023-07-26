const Contact = require("../../models/contactsModel");
const AppError = require("../../helpers/AppError");

exports.listContacts = async (req, res, next) => {
  try {
    const allContacts = await Contact.find();
    if (!allContacts) {
      throw AppError(404, "Not found");
    }
    res.status(200).json({
      message: "All contacts",
      contacts: allContacts,
    });
  } catch (error) {
    next(error);
  }
};
