angular.module('webCont').component('razonetes',{
   templateUrl: 'components/razonetes/razonetes.html',
   controller: 'razonetesCtrl as vm',
    bindings : {
      lancamentos : '@'
    }
});