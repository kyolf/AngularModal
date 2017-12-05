angular
  .module('video')
  .controller('VideoController', VideoController);

function VideoController($sce, $log) {
  var mainVidVm = this;
  $log.log('hil');
  $log.log($sce.trustAsResourceUrl('https://www.youtube.com/embed/1G0stojwYjI'));
  mainVidVm.videoSrc = {
    url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/1G0stojwYjI')
  };
  //$sce.trustAsResourceUrl('https://www.youtube.com/embed/1G0stojwYjI');
  $log.log('hi');
  $log.log(mainVidVm.videoSrc.url);
}