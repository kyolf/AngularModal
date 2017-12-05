'use strict';

angular
  .module('header')
  .controller('HeaderController', HeaderController);

function HeaderController() {
  var headerVm = this;
  headerVm.icon = {
    imgLoc: 'img/icons/justgiving.svg',
    alt: 'Header icon'
  };
}