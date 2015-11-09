/* ANGULAR UI ROUTER  - ROUTE CONFIGURATION */

(function () {
    "use strict";

    angular
    .module('protoapp')
    .config(routeConfig);

    //Route configuration using state concept of UI Router
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'components/login/protoapp.login.tmpl.html',
            controllerAs: 'vm',
            controller: 'LoginController'
        })
        .state('dashboard', {
            url: '/home',
            templateUrl: 'components/dashboard/protoapp.dashboard.tmpl.html',
            controllerAs: 'vm',
            controller: 'DashboardController'
        });

        //DEFAULT ROUTER
        $urlRouterProvider.otherwise("/");
    };
})();