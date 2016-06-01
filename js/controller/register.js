(function(){
  var registerController = angular.module("registerController",[]);

  registerController.controller("register",['$scope','sectionHeight','user',function($scope,sectionHeight,user){
 	$scope.heightVal = sectionHeight;
  	$scope.subRegister = function(){
  		var userName = $scope.userName;
  		var userTel = $scope.userTel;
  		var userPwd = $scope.userPwd;
  		user.register(userName,userTel,userPwd);
  	};
  	$scope.goLogin = function(){
      user.goLogin();
    }
  }]);
})();