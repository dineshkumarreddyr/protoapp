//do not pullute global namespace
(function(window, angular, undefined) {'use strict';

 /**
 * @desc callback manager - a place to have all your callbacks
 * @ngInject
 */
  function CallbackService() {

    //register callbacks for events
    return function(){
      var _callbackFunctions = {};

      this.on = function (type, func) {
        if (typeof _callbackFunctions[type] === 'undefined') {
          _callbackFunctions[type] = [];
        }
        _callbackFunctions[type].push(func);
      },

      //execute callbacks for event
      this.trigger = function (type, obj) {
        if (_callbackFunctions[type]) {
          if (_callbackFunctions[type].length > 0) {
            for (var i = 0, ii = _callbackFunctions[type].length; i < ii; i +=
              1) {
              _callbackFunctions[type][i](obj);
            }
          }
        }
      }
    }

  }
  
  angular.module('angularCallbackService', [])
    .factory('CallbackService', CallbackService);


})(window, window.angular);    
