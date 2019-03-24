var app = angular.module('donateApp');

app.controller('mainController', ['$scope', 'mainService',
  function ($scope, mainService) {

    $scope.createUser = function () {
      $scope.newUser = false;
      let data = {
        "username": $scope.userName,
        "email": $scope.userEmail,
        "number": $scope.userPhone
      }
      mainService.createUser(data)
        .then(function (res) {
          $scope.newUser = true;
        })
    };

    $scope.sendEmail = function () {
      $scope.newEmail = false;
      let data = {
        "to": $scope.toEmail,
        "from": $scope.fromEmail,
        "subject": $scope.mailSubject,
        "body": $scope.mailBody
      }
      mainService.sendEmail(data)
        .then(function (res) {
          $scope.newEmail = true;
        })
    };
  }]);
