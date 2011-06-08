/*
 * waitill jQuery plugin
 * Copyright 2011, Mauricio Wolff, based on doWhen by Emmett Pickerel
 * Released under the MIT Licence.
 */
!function($){
var defaults, tick, start;
defaults = {
  interval: 10,
  ajax: false
};
tick = function(iVars){
  if (iVars.test() || ((iVars.ajax) ? jQuery.isReady : false) {
    clearInterval(iVars.iid);
    iVars.cb.call(iVars.context || window, iVars.data);
  }
};
start = function(iVars){
  iVars.iid = setInterval(function(){
    tick(iVars);
  }, iVars.interval);
};
$.waitill = function(test, cb, cfg){
  start($.extend({
    test: test,
    cb: cb
  }, defaults, cfg));
};
}(window.jQuery);
