const config = require("config");
const { Email, validate } = require("../models/emailModel");
const nodemailer = require("nodemailer");

const user = config.get("user");
const pass = config.get("pass");
const clientId = config.get("clientId");
const clientSecret = config.get("clientSecret");
const refreshToken = config.get("refreshToken");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: user,
    pass: pass,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  },
});

// @desc Email
// @route POST /api/email
// @access Private/Admin
const sendEmail = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const { to: emailList, subject, text } = req.body;

  let mailOptions = {
    from: "jofwitsolution@gmail.com",
    to: emailList,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, async function (err, data) {
    if (err) {
      res.status(400);
      throw new Error("Problem sending mail");
    } else {
      let email = await Email.create({
        to: emailList,
        subject,
        text,
        messageId: data.messageId,
      });

      if (email) {
        res.json({
          message: "Email sent successfully",
        });
      } else {
        res.status(400);
        throw new Error("Bad email data");
      }
    }
  });
};

module.exports.sendEmail = sendEmail;
