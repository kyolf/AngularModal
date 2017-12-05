angular
  .module('video')
  .directive('videoDirective', videoDirective);

function videoDirective() {
  return {
    bindToController: true,
    controller: VideoController,
    controllerAs: 'mainVidVm',
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'videos/video.html',
  };
}