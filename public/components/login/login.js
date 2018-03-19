(function (angular) {
    "use strict";
    angular.module("webCont").controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ["$scope", "$stateParams", "$mdSidenav", "contAPI"];

    function loginCtrl($scope, $stateParams, $mdSidenav, contAPI) {
        var vm =  this;

        vm.openLogin = false;
        vm.openCadastro = false;
        vm.today = new Date();
        vm.cadastro = cadastro;
        vm.login = login;
        vm.user = {};

        function cadastro(obj) {
            contAPI.createUser(obj).then(function (response) {
                console.log(response)
            }, function (erro) {
                console.log(erro)
            });
        }

        function login(data) {
            contAPI.login(data).then(function (response) {
               console.log(response);
            }, function (erro) {
                console.log(response);
            });
        }

        function ping() {
            contAPI.getUsers().then(function (response) {
                console.log(response);
            }, function (erro) {
                console.log(erro);
            });
        }

        ping();

        vm.isOpenRight = function(){
            vm.openLogin =  true;
        };

        vm.isOpenLeft = function(){
            vm.openCadastro =  true;
        };
    }
})(angular);

