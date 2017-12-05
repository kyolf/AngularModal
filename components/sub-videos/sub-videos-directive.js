'use strict';

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
    templateUrl: 'components/sub-videos/sub-videos.html',
  };
}