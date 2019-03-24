const config = require('../config/emailConfig.js');
let logger= require('../logger.js');

let emailCtrl = {
  sendEmail: function (req, res) {
    // New object for email Config
    let configEmail = new config();

    let transporter = configEmail.createTransport();
    let options = configEmail.mailOptions(req);
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    transporter.sendMail(options, (error, info) => {
      if (error) {
        return console.log(error);
      }
      logger.info(`Email Sent to ${options.to} Successfully`);
      res.send(options);
    });
  }
}


module.exports = emailCtrl;