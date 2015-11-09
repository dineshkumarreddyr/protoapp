/* ANGULAR SERVCIES - COMMON FUNCTIONALITIES*/

(function () {
    "use strict";

    angular
    .module('protoapp')
    .factory('$appservice', appService);

    function appService($http, $q, $log) {
        function authenticate() {
            var deferred = $q.defer();

            $http.get('data/user.json')
            .success(function (response) {
                //HANDLING SUCCESS RESPONSE
                deferred.resolve(response);
            })
            .error(function (response) {
                //HANDLING ERROR
                deferred.reject(response);
            });
            return deferred.promise;
        };

        function toiFeed() {
            var deferred = $q.defer();
            var url = "http://feeds.feedburner.com/tweakers/mixed?callback=angular.callbacks._0";
            $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent('http://timesofindia.feedsportal.com/c/33039/f/533917/index.rss'))
            .success(function (response) {
                deferred.resolve(response);
            })
            .error(function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }
        return {
            Authenticate: authenticate,
            TimeOfIndiaFeed: toiFeed
        }
    }
})();