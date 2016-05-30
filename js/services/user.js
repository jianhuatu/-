(function(){
  var userServices = angular.module("userServices",[]);

  var argObj = new Object();

  var user = function(arg){
  	arg = arg || {};
  	argObj['location'] = arg[0];
  	argObj['http'] = arg[1];
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
      alert("手机号码不能为空");
      return false;
    }else if(!/^1\d{10}$/g.test(data)){
      alert("手机号码格式错误");
      return false;
    }
    return true;
  }

  user.prototype.userPwdCheck = function(data){
    if(!data){
      alert("密码不能为空");
      return false;
    }else if(data.length>16 || data.length<6){
      alert("密码长度为6-16位");
    }else if(!/^(\w|\d|\s){6,16}$/.test(data)){
      alert("密码可以是字符、数字或者空格");
      return false;
    }
    return true;
  }

  user.prototype.userNameCheck = function(data){
    if(!data){
      alert("昵称不能为空");
      return false;
    }
    return true;
  }

  user.prototype.login = function(userTel,userPwd){
    if(!this.checkData({userTel:userTel,userPwd:userPwd}))return false;
  	argObj.http({
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
    argObj.http({
      url : 'http://app.tutcw.com/user/register',
      method : "POST",
      data : "userName="+userName+"&userTel="+userTel+"&userPwd="+userPwd,
      responseType : 'json'
    }).success(function(data){
      console.log(data);
    });
  }

  user.prototype.goRigister = function(){
  	argObj.location.path("/user/register");
  }

  user.prototype.goLogin = function(){
  	argObj.location.path("/user/login");
  }

  userServices.factory("user",["$location","$http",function($location,$http){
  	return new user(arguments);
  }]);
})();