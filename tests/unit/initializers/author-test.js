import Ember from 'ember';
import AuthorInitializer from '../../../initializers/author';
import { module, test } from 'qunit';

let registry, application, factories, injections;

module('Unit | Initializer | author', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
    application = stub(application);
  },
  afterEach: function() {
    factories = null;
    injections = null;
    application = null;
    registry = null;
  }
});

test('it registers authors factory: model, injects into: service, serializer', function(assert) {
  AuthorInitializer.initialize(registry, application);

  let registered = Ember.A(factories.mapBy('name'));
  assert.ok(registered.contains('model:author'), 'model:author registered');
  let msg = 'authors injected into service:store';
  assert.equal(injections.findBy('factory', 'service:store').property, 'authors', msg);
  msg = 'serializer injected into service:authors';
  assert.equal(injections.findBy('factory', 'service:authors').property, 'serializer', msg);
});

function stub(app) {
  factories = Ember.A([]);
  injections = Ember.A([]);
  app.register = function(name, factory) {
    factories.push({name: name, factory: factory});
  };
  app.inject = function(factory, property, injection) {
    injections.push({
      factory: factory,
      property: property,
      injection: injection
    });
  };
  return app;
}
