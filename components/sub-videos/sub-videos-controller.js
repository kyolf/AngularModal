'use strict';

angular
  .module('video.sub')
  .controller('SubVideoController', SubVideoController);

function SubVideoController($sce) {
  var subVidVm = this;
  subVidVm.subVideos = [
    { 
      img: 'img/video-images/mst3k-small1.jpg', 
      url: 'https://www.youtube.com/embed/ibUsglYe4r0',
      modalShown: false,
      alt: 'MST3k small image 1',
      title: 'Season 0 KTMA',
    },
    { 
      img: 'img/video-images/mst3k-small2.jpg', 
      url: 'https://www.youtube.com/embed/cAKentKiGOY',
      modalShown: false,
      alt: 'MST3k small image 2',
      title: 'Comedy Central The Golden Years',
    },
    { 
      img: 'img/video-images/mst3k-small3.jpg', 
      url: 'https://www.youtube.com/embed/GVytXppIFw0',
      modalShown: false,
      alt: 'MST3k small image 3',
      title: 'Sci-Fi, Crow\'s voice, & Ram Chips',
    },
  ];

  subVidVm.convertToTrustedUrl = function(url) {
    return $sce.trustAsResourceUrl(url);
  };

  subVidVm.showModal = function(index) {
    subVidVm.subVideos[index].modalShown = !subVidVm.subVideos[index].modalShown;
  };
}