(function(){
  var userServices = angular.module("userServices",[]);

  var argObj = new Object();

  var user = function(arg){
  	arg = arg || {};
  	argObj['location'] = arg[0];
  	argObj['http'] = arg[1];
  }

  user.prototype.checkData = function(){

  }

  user.prototype.login = function(){
  	argObj.http({
  		url : 'http://app.tutcw.com/user/login',
  		method : "POST",
  		data : "test=1",
  		responseType : 'json'
  	}).success(function(data){
          console.log(data);
        });;
  }

  user.prototype.register = function(){
  }

  user.prototype.goRigister = function(){
  	argObj.location.path("/user/register");
  }

  user.prototype.goLogin = function(){
  	argObj.location.path("/user/login");
  }

  userServices.factory("user",["$location","$http",function($location,$http){
  	return new user(arguments);
  }]);
})();