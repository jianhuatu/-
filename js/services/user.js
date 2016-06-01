(function(){
  var userServices = angular.module("userServices",[]);

  var user = function(){
  }

  user.prototype.checkData = function(data){
    for(var k in data){
      var checkErr = this[k+"Check"](data[k]);
      if(!checkErr)return false;
    }
    return true;
  }

  user.prototype.userTelCheck = function(data){
    if(!data){
      this.alert("手机号码不能为空");
      return false;
    }else if(!/^1\d{10}$/g.test(data)){
      this.alert("手机号码格式错误");
      return false;
    }
    return true;
  }

  user.prototype.userPwdCheck = function(data){
    if(!data){
      this.alert("密码不能为空");
      return false;
    }else if(data.length>16 || data.length<6){
      this.alert("密码长度为6-16位");
    }else if(!/^(\w|\d|\s){6,16}$/.test(data)){
      this.alert("密码可以是字符、数字或者空格");
      return false;
    }
    return true;
  }

  user.prototype.userNameCheck = function(data){
    if(!data){
      this.alert("昵称不能为空");
      return false;
    }
    return true;
  }

  user.prototype.login = function(userTel,userPwd){
    if(!this.checkData({userTel:userTel,userPwd:userPwd}))return false;
  	this.http({
  		url : 'http://app.tutcw.com/user/login',
  		method : "POST",
  		data : "userTel="+userTel+"&userPwd="+userPwd,
  		responseType : 'json'
  	}).success(function(data){
      console.log(data);
    });
  }

  user.prototype.register = function(userName,userTel,userPwd){
    if(!this.checkData({userName:userName,userTel:userTel,userPwd:userPwd}))return false;
    this.http({
      url : 'http://app.tutcw.com/user/register',
      method : "POST",
      data : "userName="+userName+"&userTel="+userTel+"&userPwd="+userPwd,
      responseType : 'json'
    }).success(function(data){
      console.log(data);
    });
  }

  user.prototype.goRigister = function(){
  	this.location.path("/user/register");
  }

  user.prototype.goLogin = function(){
  	this.location.path("/user/login");
  }

  userServices.factory("user",["$location","$http","alert",function($location,$http,alert){
    user.prototype.location = $location;
    user.prototype.http = $http;
    user.prototype.alert = alert;

  	return new user(arguments);
  }]);
})();