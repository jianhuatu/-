(function(){
  var eventDirective = angular.module("eventDirective",[]);

  eventDirective.directive("noTouchMove",function(){
  	return {
  		restrict : "A",
  		link : function(scope, element, attrs){
  			element[0].addEventListener("touchmove",function(e){
  				e.preventDefault();
  				return false;
  			},false);
  		}
  	}
  });

  eventDirective.directive("ngTap",function(){
    return {
      restrict : "A",
      controller : function($scope, $element){
        $($element[0]).tap(function(event){
          var method = $element.attr("ng-tap");
          $scope.$event = event;
          $scope.obj = $element;
          $scope.$apply($scope[method]);
          event.preventDefault();
          return false;
        });
      }
    }
  });
})();