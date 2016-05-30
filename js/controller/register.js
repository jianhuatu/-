(function(){
  var registerController = angular.module("registerController",[]);

  registerController.controller("register",['$scope','sectionHeight','user',function($scope,sectionHeight,user){
 	$scope.heightVal = sectionHeight;
  	$scope.subRegister = user.register;
  	$scope.goLogin = user.goLogin;
  }]);
})();