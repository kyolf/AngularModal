'use strict';

angular
  .module('logo.bar')
  .directive('logoDirective', logoDirective);

function logoDirective() {
  return {
    bindToController: true,
    controller: LogoController,
    controllerAs: 'logoVm',
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'logo-bar/logo-bar.html',
  };
}