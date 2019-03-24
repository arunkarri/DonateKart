let nodeMailer = require('nodemailer');

class emailConfig {

}

emailConfig.prototype.createTransport = function () {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'kashyap1049@gmail.com',
      pass: 'xxxxx'
    }
  });
  return transporter;
};
emailConfig.prototype.mailOptions = function (req) {
  let mailOptions = {
    from: `DonateKart Test<${req.body.from}>`, // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    html: `<p>${req.body.body}</p>` // html body
  };
  return mailOptions;
}


module.exports = emailConfig;