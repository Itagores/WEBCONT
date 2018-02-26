/*
angular.module('contatooh').controller('ContatosController',
    function($scope, $resource) {

        var Contato = $resource('/contatos/:id');

        $scope.total = 1;
        
        $scope.incrementar = function () {
            $scope.total++;
        };

        $scope.contatos = [];

        $scope.filtro = '';

        function buscaContatos() {
            Contato.query(
                function (response) {
                    $scope.contatos = response;
                    console.log("sucesso");
                }, function (erro) {
                    console.log("erro na requisição de contatos.")
                }
            );
        }

        buscaContatos();

        $scope.remove = function(contato) {
            Contato.delete({id:contato._id}, /!*function () {
                // $scope.contatos = $scope.contatos.filter(function (t) {
                //     return t !== contato.
                // })
                console.log("sucesso");
                }*!/ buscaContatos,
                function (erro) {
                    console.log("erro ao remover contato!" + erro );
                });
        };


    });
*/
