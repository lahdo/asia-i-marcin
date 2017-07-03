import PhotosModule from './photos';
import PhotosController from './photos.controller';
import PhotosComponent from './photos.component';
import PhotosTemplate from './photos.html';

describe('Photos', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PhotosModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PhotosController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PhotosTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PhotosComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PhotosTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PhotosController);
    });
  });
});
