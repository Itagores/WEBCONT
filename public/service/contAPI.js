(function (angular) {
    "use strict";

    angular.module("webCont").factory('contAPI', contAPI);

    contAPI.$inject = ["$http"];

    function contAPI($http) {

        var service = {
            getUsers : _getUsers,
            createUser: _createUser,
            login: _login
        };

        return service;

        function _login(data) {
            return $http.get('http://localhost:3000/api/login/'+data.email+'/'+data.senha);
        }

        function _createUser(data) {
            return $http.get('http://localhost:3000/api/createUser',data);
        }

        function _getUsers() {
            return $http.get('http://localhost:3000/api/users');
        }
    }

})(angular);
