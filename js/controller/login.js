(function(){
  var loginController = angular.module("loginController",[]);

  loginController.controller("login",['$scope','sectionHeight','user',function($scope,sectionHeight,user){
  	$scope.heightVal = sectionHeight;
  	$scope.subLogin = user.login;
  	$scope.goRegister = user.goRigister;
  }]);
})();