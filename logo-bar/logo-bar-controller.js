'use strict';

angular
  .module('logo.bar')
  .controller('LogoController', LogoController);

function LogoController() {
  var logoVm = this;
  logoVm.logoArr = [
    {
      imgLoc: 'img/icons/facebook.png',
      alt: 'facebook icon'
    },
    {
      imgLoc: 'img/icons/twitter.png',
      alt: 'twitter icon'
    },
    {
      imgLoc: 'img/icons/googleplus.png',
      alt: 'google plus icon'
    },
    {
      imgLoc: 'img/icons/pinterest.png',
      alt: 'pInterest icon'
    }
  ];
}