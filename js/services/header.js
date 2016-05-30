(function(){
  var headerServices = angular.module("headerServices",[]);

  headerServices.factory('authInterceptor', function ($rootScope, $q, $window,$location) {
  	return {
  		request : function(config){
  			if(config.url.indexOf("app.tutcw.com")<0)return config;
  			config.headers = config.headers || {};
  			config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  			return config;
  		},
  		response : function(response){
  			return response || $q.when(response);
  		}
  	}
  });
})();