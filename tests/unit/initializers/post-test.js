import Ember from 'ember';
import PostInitializer from '../../../initializers/post';
import { module, test } from 'qunit';

let registry, application, factories, injections;

module('Unit | Initializer | post', {
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

test('it registers posts factory: model, injects into: service, serializer', function(assert) {
  PostInitializer.initialize(registry, application);

  let registered = Ember.A(factories.mapBy('name'));
  assert.ok(registered.contains('model:post'), 'model:post registered');
  let msg = 'posts injected into service:store';
  assert.equal(injections.findBy('factory', 'service:store').property, 'posts', msg);
  msg = 'serializer injected into service:posts';
  assert.equal(injections.findBy('factory', 'service:posts').property, 'serializer', msg);
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
