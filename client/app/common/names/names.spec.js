import NamesModule from './names';
import NamesController from './names.controller';
import NamesComponent from './names.component';
import NamesTemplate from './names.html';

describe('Names', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NamesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NamesController();
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
      expect(NamesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NamesComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NamesTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NamesController);
    });
  });
});
