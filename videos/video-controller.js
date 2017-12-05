angular
  .module('video')
  .controller('VideoController', VideoController);

function VideoController($sce) {
  var mainVidVm = this;
  mainVidVm.videoSrc = {
    url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/1G0stojwYjI')
  };
}