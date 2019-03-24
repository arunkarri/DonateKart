var app = angular.module('donateApp');


app.service('mainService',['$http', function($http, $q) {
 
  let host= "http://localhost:4000"
	this.createUser = function(data){
    
      return $http({
	        url: host+'/create-user',
	        method: 'POST',
	        data: data
			});
	}
	this.sendEmail = function(data){
    
		return $http({
				url: host+'/send-email',
				method: 'POST',
				data: data
		});
}
	
}]);