angular
  .module('video.sub')
  .controller('SubVideoController', SubVideoController);

function SubVideoController($sce) {
  var subVidVm = this;
  subVidVm.subVideos = [
    { 
      img: "img/mst3k-small1.jpg", 
      url: "https://www.youtube.com/embed/ibUsglYe4r0",
      showModal: false
    },
    { 
      img: "img/mst3k-small2.jpg", 
      url: "https://www.youtube.com/embed/cAKentKiGOY",
      showModal: false
    },
    { 
      img: "img/mst3k-small3.jpg", 
      url: "https://www.youtube.com/embed/GVytXppIFw0",
      showModal: false
    },
  ]
}