const Joi = require("joi");
const PASSWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/;

const userSubscriptionEnum = require("../constans/userSubscriptionEnum");

exports.usersValidationSchema = (data) =>
  Joi.object()
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string()
        .regex(PASSWD_REGEX)
        .required(),
      subscription: Joi.string().valid(
        ...Object.values(userSubscriptionEnum)
      ),
    })
    .validate(data);
