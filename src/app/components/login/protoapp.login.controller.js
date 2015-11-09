/* CONTROLLER - LOGIN*/
(function () {
    "use strict";

    angular
    .module('protoapp')
    .controller('LoginController', loginController);

    //FN - Login - @Inject depency
    function loginController($log, $state, $appservice, $apputils, $cookies) {
        var vm = this; //DEFINING VIEW MODEL

        vm.authenticate = function (invalid) {
            if (invalid) {
                alert('Mandatory !!');
                return;
            }

            //AUTHENTICATE USER
            $appservice.Authenticate().then(function (response) {
                //SUCCESS
                if (response && response.userdetail && response.userdetail.hasOwnProperty('email')) {
                    if (vm.emailaddress === response.userdetail.email && vm.password === response.userdetail.pass) {
                        $apputils.addCookie('uname', response.userdetail.email);
                        $state.go('dashboard');
                    }
                    else {
                        alert('Invalid user details. Please try entering correct details');
                    }
                }
            }, function (response) {
                $log.error('API Failed' + response);
            });
        };

    }
})();