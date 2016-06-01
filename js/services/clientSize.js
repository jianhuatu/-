(function(){
  var clientSizeServices = angular.module("clientSizeServices",[]);

  var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

  clientSizeServices.factory("clientHeight",[function(){
    return clientHeight;
  }]);

  clientSizeServices.factory("clientWidth",[function(){
    return clientWidth;
  }]);

  clientSizeServices.factory("scrollTop",[function(){
  	return document.documentElement.scrollTop || document.body.scrollTop;
  }]);
})();