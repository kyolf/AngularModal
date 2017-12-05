'use strict';

angular
  .module('footer')
  .directive('footerDirective', footerDirective);

function footerDirective() {
  return {
    bindToController: true,
    controller: FooterController,
    controllerAs: 'footerVm',
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'footer/footer.html',
  };
}