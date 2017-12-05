angular
.module('video.sub')
.directive('subVideoDirective', subVideoDirective);

function subVideoDirective() {
  return {
    bindToController: true,
    controller: SubVideoController,
    controllerAs: 'subVidVm',
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'videos/sub-videos/sub-videos.html',
  };
}