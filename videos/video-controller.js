angular
  .module('video')
  .controller('VideoController', VideoController);



function VideoController() {
  var mainVidVm = this;
  mainVidVm.videoSrc = {url: 'https://www.youtube.com/embed/1G0stojwYjI' };
}