var app = angular.module('webCont', ['ui.router', 'ngResource', 'ngMaterial']);

angular.module('webCont').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: "home",
        url : "/home",
        component: 'home'
    })

        .state({
        name: "releasing",
        url : "/releasing",
        component: 'releasing'
    });

    $urlRouterProvider.otherwise('/home');

    /*$stateProvider.state(
        {
            name: "contato",
            url : "/contato/:contatoId",
            templateUrl : "partials/contato.html",
            controller : 'contatoController'
        }
    );*/



});
/*
var app = angular.module('contatooh', ['ui.router', 'ngResource']);

angular.module('contatooh').config(function($stateProvider) {

    $stateProvider.state({
        name: "contatos",
        url : "/contatos",
        templateUrl : "partials/contatos.html",
        controller : 'ContatosController'
    });

    $stateProvider.state(
        {
            name: "contato",
            url : "/contato/:contatoId",
            templateUrl : "partials/contato.html",
            controller : 'contatoController'
        }
    );

/!*    $stateProvider.otherwise({redirectTo: 'contatos'});*!/

    /!*$routeProvider.when('/contatos', {
           //template: '<h1>teste</h1>'
           templateUrl:'public/partials/contatos.html',
           controller:'ContatosController'
        });*!/

        /!*$routeProvider.when('/contato/:contatoId', {
            templateUrl:'partials/contato.html',
            controller:'ContatoController'
        });*!/

});
*/




