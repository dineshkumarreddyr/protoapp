/* SERVICES - UTLITIES */
(function () {
    "use strict";

    angular
    .module('protoapp')
    .service('$apputils', appUtils);

    function appUtils($cookies) {
        this.addCookie = function (key, val) {
            $cookies.put(key, val);
        },
        this.getCookie = function (key) {
            return $cookies.get(key);
        },
        this.removeCookie = function (key) {
            $cookies.remove(key);
        }
    }
})();