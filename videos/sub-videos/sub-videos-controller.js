angular
  .module('video.sub')
  .controller('SubVideoController', SubVideoController);

function SubVideoController($sce) {
  var subVidVm = this;
  subVidVm.subVideos = [
    { 
      img: "img/mst3k-small1.jpg", 
      url: "https://www.youtube.com/embed/ibUsglYe4r0",
      modalShown: false
    },
    { 
      img: "img/mst3k-small2.jpg", 
      url: "https://www.youtube.com/embed/cAKentKiGOY",
      modalShown: false
    },
    { 
      img: "img/mst3k-small3.jpg", 
      url: "https://www.youtube.com/embed/GVytXppIFw0",
      modalShown: false
    },
  ];

  subVidVm.convertToTrustedUrl = function(url) {
    return $sce.trustAsResourceUrl(url);
  };

  subVidVm.showModal = function(index) {
    return subVidVm.subVideos[index] = true;
  };
}