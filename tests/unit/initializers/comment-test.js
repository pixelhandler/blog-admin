import Ember from 'ember';
import { initialize } from '../../../initializers/comment';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | comment', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(registry, application);

  let model = registry.lookupFactory('model:comments');
  assert.ok(model);

  let service = registry.lookupFactory('service:comments');
  assert.ok(service);

  let adapter = registry.lookupFactory('adapter:comments');
  assert.ok(adapter);

  let serializer = registry.lookupFactory('serializer:comments');
  assert.ok(serializer);
});
