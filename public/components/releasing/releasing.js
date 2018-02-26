angular.module("webCont").controller('releasingCtrl',
    function ($rootScope, $scope, $mdToast) {
        var vm = this;

        vm.lancar = lancar;
        vm.remove = remove;
        vm.edit = edit;
        vm.clean = clean;
        vm.addCredito = addCredito;
        vm.removeCredito = removeCredito;
        vm.addDebito  = addDebito;
        vm.removeDebito =  removeDebito;
        vm.gerarRazonetes = gerarRazonetes;
        vm.lancamentos = [];

        vm.lancamento = {
            local: '',
            debitos : [
                {
                    conta: '',
                    valor : null
                }
            ],
            creditos : [
                {
                    conta: '',
                    valor : null
                }
            ],
            historico: ""
        };
        vm.$onInit = function () {
        };

        function gerarRazonetes() {
            $rootScope.lancamentos = vm.lancamentos;
            $rootScope.tabIndex = 1;
        }

        function removeCredito(input) {
            var aux = [];
            for(var i = 0; i < vm.lancamento.creditos.length; i++){
                if(i !== input){
                    aux.push(vm.lancamento.creditos[i]);
                }
            }
            vm.lancamento.creditos = aux;
        }

        function removeDebito(input) {
            var aux = [];
            for(var i = 0; i < vm.lancamento.debitos.length; i++){
                if(i !== input){
                    aux.push(vm.lancamento.debitos[i]);
                }
            }
            vm.lancamento.debitos = aux;
        }

        function addCredito() {
            vm.lancamento.creditos.push({
                conta:"",
                valor: null
            });
        }

        function addDebito() {
            vm.lancamento.debitos.push({
                conta:"",
                valor: null
            });
        }

        function clean() {
            vm.lancamento = {
                local: ' ',
                debitos : [
                    {
                        conta: ' ',
                        valor : null
                    }
                ],
                creditos : [
                    {
                        conta: ' ',
                        valor : null
                    }
                ],
                historico: " "
            };
        }

        function edit(input) {
            vm.lancamento = vm.lancamentos[input];
            remove(input);
        }
        function remove(input) {
            var aux = [];
            for(var i = 0; i< vm.lancamentos.length; i++){
                if(i !== input){
                    aux.push(vm.lancamentos[i]);
                }
            }
            vm.lancamentos = aux;
        }

        function lancar() {
            vm.lancamentos.push(angular.copy(vm.lancamento));
            clean();
            $rootScope.lancamentos = vm.lancamentos;
            toast();
        }

        function toast(imput) {
            $mdToast.show(
                $mdToast.simple()
                    .position('top left')
                    .textContent('Simple Toast!')
                    .hideDelay(3000)
            );
        }
});