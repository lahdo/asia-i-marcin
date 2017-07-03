import angular from 'angular';
import uiRouter from 'angular-ui-router';
import photosComponent from './photos.component';
import photosService from './photos.service';

let photosModule = angular.module('photos', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('photos', {
        url: '/photos',
        component: 'photos'
      });
  })

.component('photos', photosComponent)
.service('photosService', photosService)

.name;

export default photosModule;
