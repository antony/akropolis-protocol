(function () {
  'use strict';

  var KEY_TO_ICON = {
    'TECH': 'fa-server',
    'SUSTAINABLE': 'fa-stack-exchange',
    'BIOMED': 'fa-medkit',
    'ENERGY': 'fa-lightbulb-o'
  };

  angular.module('akr-pension')
    .component('akrFund', {
      controller: ComponentController,
      templateUrl: 'app/pages/akr/savings/akr-fund.component.html',
      bindings: {
        fund: '=',
        max: '<',
        key: '@'
      }
    });

  /** @ngInject */
  function ComponentController() {
    var ctrl = this;

    ctrl.$onInit = function () {
      ctrl.iconClass = KEY_TO_ICON[ctrl.key];
    };


  }
})();