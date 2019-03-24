const emailCtrl = require('../controllers/sendEmailController.js');
const userCtrl = require('../controllers/createUserController.js');

module.exports = function (app,logger) {
  app.post('/create-user', userCtrl.createUser);
  app.post('/send-email', emailCtrl.sendEmail);
}