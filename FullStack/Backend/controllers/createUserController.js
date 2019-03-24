const userClass = require('../config/userData.js');
let localStorage = require('localstorage');
let logger= require('../logger.js');

let fetch = {
  userDetails: function () {
    return new Promise(function (resolve, reject) {
      //Set user Details
      resolve(JSON.parse(localStorage.getItem('userDetails')));

    })
  }
}

let userCtrl = {

  createUser: function (req, resp) {
    let input = req.body;
    logger.debug(input.username+" input")
    const userObj = new userClass(input.username, input.email, input.number);
    logger.debug(JSON.stringify(userObj)+"object created for input");
    fetch.userDetails()
      .then(function (res) {
        if (res == null) {
          res = [];
        }
        else {
          res = res.filter(function (obj) {
            return obj.email != input.mail;
          });

        }
        console.log(res);
        res.push(userObj);
        localStorage.setItem('userDetails', JSON.stringify(res));
        console.log(`my storge ${localStorage.getItem('userDetails')}`);
        logger.info(`New User ${input.username} Added Successfully`);
        resp.send(JSON.parse(localStorage.getItem('userDetails')));
      });
  }
};

module.exports = userCtrl;