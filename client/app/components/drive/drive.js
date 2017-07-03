import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMap from 'ngmap';
import driveComponent from './drive.component';

let driveModule = angular.module('drive', [
  uiRouter,
  ngMap
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('drive', {
        url: '/drive',
        component: 'drive'
      });
  })

  .component('drive', driveComponent)

  .name;

export default driveModule;
