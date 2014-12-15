
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

  function userValidate(username){
    var email = /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(username);
    var phone = /0?(13|14|15|18)[0-9]{9}/.test(username);
    var userName = /^[A-Za-z0-9_\-\u4e00-\u9fa5]{6,25}$/.test(username);
    
    if(!email && !phone && !userName){
      return false;
    }
    else if(email || phone || userName){
      return true;
    }
    return false;
  }

  return userValidate;

});
