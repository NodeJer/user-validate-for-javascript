
(function(root, $, factory){

  if(typeof define === 'function' && define.cmd){
    define(function(require, exports, module){
      exports.userVerification = factory($);
    });
  }
  else{
    root.userVerification = factory($);
  }
})(window, window.Zepto||window.jQuery, function($){

  function userVerification(string, success, error){
    var email = /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(string);
    var phone = /0?(13|14|15|18)[0-9]{9}/.test(string);
    var userName = /^[A-Za-z0-9_\-\u4e00-\u9fa5]{6,25}$/.test(string);
    
    if(!email && !phone && !userName){
      if(error)error();
      return false;
    }
    else if(email || phone || userName){
      if(success)success();
      return true;
    }
    return false;
  }

  return userVerification;

});
