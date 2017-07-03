import angular from 'angular';
import uiRouter from 'angular-ui-router';
import namesComponent from './names.component';

let namesModule = angular.module('names', [
  uiRouter
])

.component('names', namesComponent)

.name;

export default namesModule;
