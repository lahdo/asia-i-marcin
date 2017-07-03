import template from './photos.html';
import controller from './photos.controller';
import photosService from './photos.service';
import './photos.scss';

let photosComponent = {
  bindings: {},
  template,
  controller,
  photosService
};

export default photosComponent;
