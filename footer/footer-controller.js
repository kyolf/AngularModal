'use strict';

angular
  .module('footer')
  .controller('FooterController', FooterController);

function FooterController() {
  var footerVm = this;
  footerVm.iconArr = [
    {
      imgLoc: 'img/icons/facebook.svg',
      alt: 'Facebook icon'
    },
    {
      imgLoc: 'img/icons/linkedin.svg',
      alt: 'LinkedIn icon'
    },
    {
      imgLoc: 'img/icons/blogger.svg',
      alt: 'Blogger icon'
    },
    {
      imgLoc: 'img/icons/youtube.svg',
      alt: 'Youtube icon'
    },
  ];
}