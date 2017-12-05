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
    scope: {
      videosrc: '@'
    },
    templateUrl: 'videos/video.html'
  };
}