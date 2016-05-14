(function(){
  var diandianApp = angular.module("diandianApp",[
      'ngRoute',
      'diandianController'
    ]);

  diandianApp.config(["$routeProvider","$locationProvider","$httpProvider",function($routeProvider,$locationProvider,$httpProvider){
      $routeProvider.
      when("/",{
        templateUrl : "tpl/todayEvent.html",
        controller : "todayEvent"
      });
      $locationProvider.html5Mode(false).hashPrefix("!");
  }]);
})();
