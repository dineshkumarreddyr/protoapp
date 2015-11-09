/* DASHBOARD - CONTROLLER */
(function () {
    "use strict";

    angular
    .module('protoapp')
    .controller('DashboardController', dashboardController);

    function dashboardController($log, $appservice, $apputils, $state) {
        var vm = this;

        function activate() {
            verifycookies();
        }
        activate();

        function init() {
            this.getTOIFeed = function () {
                $appservice.TimeOfIndiaFeed().then(function (response) {
                    if (response) {
                        vm.feeds = response.responseData.feed.entries;
                    }
                }, function (response) { });
            }
        };

        (new init()).getTOIFeed();

        function verifycookies() {
            //VERIFY USER WITH ACCESSTOKEN
            if ($apputils.getCookie('uname') == undefined || $apputils.getCookie('uname') == null) {
                $state.go('login');
            }
        }
    }
})();