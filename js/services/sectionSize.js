(function(){
  var sectionSizeServices = angular.module("sectionSizeServices",[]);

  sectionSizeServices.factory("sectionWidth",["clientWidth",function(clientWidth){
    return clientWidth;
  }]);

  sectionSizeServices.factory("sectionHeight",["clientHeight",function(clientHeight){
    return clientHeight-44;
  }]);
})();