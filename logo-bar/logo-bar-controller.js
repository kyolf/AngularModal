'use strict';

angular
  .module('logo.bar')
  .controller('LogoController', LogoController);

function LogoController() {
  var logoVm = this;
  logoVm.logoArr = [
    {
      imgLoc: 'img/icons/facebook.svg',
      alt: 'facebook icon'
    },
    {
      imgLoc: 'img/icons/twitter.svg',
      alt: 'twitter icon'
    },
    {
      imgLoc: 'img/icons/googleplus.svg',
      alt: 'google plus icon'
    },
    {
      imgLoc: 'img/icons/pinterest.svg',
      alt: 'pInterest icon'
    }
  ];
}