(function(){
  var alertDirective = angular.module("alertDirective",[]);

  var alertObj = new Object();

  alertDirective.directive("ngAlert",["$window","scrollTop","clientHeight","clientWidth",function($window,scrollTop,clientHeight,clientWidth){
  	return {
  		restrict : "E",
      scope : true,
      templateUrl : "tpl/alert.html",
  		link : function(scope, element, attrs){
        $(element[0]).addClass("alert");
        $window.alertMsg = function(msg){
          if(alertObj.timeoutObj)clearTimeout(alertObj.timeoutObj);
          element.css({
            position : "absolute",
            left : (clientWidth*0.4/2)+"px",
            top : (scrollTop+clientHeight/3)+"px"
          });
          $(element[0]).show();
          scope.msg = msg;
          alertObj.timeoutObj = setTimeout(function(){
            $(element[0]).hide();
            alertObj.timeoutObj = "";
          },1800);
        }
  		}
  	}
  }]);
})();