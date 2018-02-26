angular.module("webCont").controller('razonetesCtrl',
    function ($rootScope) {
        var vm = this;

        vm.lancamentos= this.lancamentos;

        /*$rootScope.$watch('vm.lancamentos', function (newVal) {
           vm.lancamentos = newVal;
           console.log(newVal);
        });*/

        // vm.$onInit = function () {
        //    vm.lancamentos = this.lancamentos;
        //    console.log(vm.lancamentos);
        // };


    }
);