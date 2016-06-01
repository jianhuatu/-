(function(){
  var alertServices = angular.module("alertServices",[]);

  alertServices.factory("alert",["$window",function($window){
    return function(msg){
      $window.alertMsg(msg);
    }
  }]);
})();