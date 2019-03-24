var donateApp = angular.module('donateApp', ['ui.router']);
 
donateApp.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('create-user', {
      url: "/",
      templateUrl: "./app/views/createUser.html",
      controller: 'mainController'
    })
    .state('send-email', {
      url: "/sendEmail",
      templateUrl: "./app/views/sendEmail.html",
      controller: 'mainController'
    })
    // $urlRouterProvider.otherwise("/");
});