'use strict';

angular
  .module('header')
  .directive('headerDirective', headerDirective);

function headerDirective() {
  return {
    bindToController: true,
    controller: HeaderController,
    controllerAs: 'headerVm',
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'header/header.html',
  };
}