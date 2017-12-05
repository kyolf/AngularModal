angular
  .module('about')
  .directive('aboutDirective', aboutDirective);

function aboutDirective() {
  return {
    bindToController: true,
    controller: AboutController,
    controllerAs: 'abtVm',
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'about/about.html',
  };
}