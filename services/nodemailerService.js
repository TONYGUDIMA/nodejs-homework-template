const nodemailer = require("nodemailer");

module.exports = async (user, url) => {
  const from = process.env.EMAIL_FROM;
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4d86f801927d4d",
      pass: "8918d72f97307c",
    },
  });

  const emailConfig = {
    from,
    to: user.email,
    subject: "Verification Email",
    text: `${url}/users/verify/${user.verificationToken}`,
  };
  await transport.sendMail(emailConfig);
};
