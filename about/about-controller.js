'use strict';

angular
  .module('about')
  .controller('AboutController', AboutController);
function AboutController() {
  var abtVm = this;
  abtVm.titleArr = [
    'The Early Days',
    'MST3K'
  ];
  abtVm.descArr = [
    'In the not-too-distant future, next Sunday, AD',
    'There was a man. There were some puppets. It was amazing.',
    'There are the experiments of the SQL.'
  ];

  abtVm.descJoin = abtVm.descArr.join(' ');
}
