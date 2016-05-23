(function(){
  var diandianApp = angular.module("diandianApp",[
      'ngRoute',
      'todayEventController',
      'loginController',
      'registerController'
    ]);

  diandianApp.config(["$routeProvider","$locationProvider","$httpProvider",function($routeProvider,$locationProvider,$httpProvider){
      $routeProvider.
      when("/",{
        templateUrl : "tpl/todayEvent.html",
        controller : "todayEvent"
      }).when("/user/login",{
        templateUrl : "tpl/user/login.html",
        controller : "login"
      }).when("/user/register",{
        templateUrl : "tpl/user/register.html",
        controller : "register"
      });
      $locationProvider.html5Mode(false).hashPrefix("!");
  }]);
})();
