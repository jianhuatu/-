(function(){
  var loginController = angular.module("loginController",[]);

  loginController.controller("login",['$scope','sectionHeight','user',function($scope,sectionHeight,user){
  	$scope.heightVal = sectionHeight;
  	$scope.subLogin = function(){
  		var userTel = $scope.userTel;
      var userPwd = $scope.userPwd;
      user.login(userTel,userPwd);
  	};
  	$scope.goRegister = function(){
      user.goRigister();
    }
  }]);
})();