'use strict';

angular
  .module('footer')
  .controller('FooterController', FooterController);

function FooterController() {
  var footerVm = this;
  footerVm.iconArr = [
    {
      imgLoc: 'img/icons/facebook-gray.png',
      alt: 'Facebook icon'
    },
    {
      imgLoc: 'img/icons/linkedin-gray.png',
      alt: 'LinkedIn icon'
    },
    {
      imgLoc: 'img/icons/twitter-gray.png',
      alt: 'Blogger icon'
    },
    {
      imgLoc: 'img/icons/youtube-gray.png',
      alt: 'Youtube icon'
    },
  ];
}