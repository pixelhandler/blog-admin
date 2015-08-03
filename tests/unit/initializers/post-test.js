import Ember from 'ember';
import { initialize } from '../../../initializers/post';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | post', {
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

  let model = registry.lookupFactory('model:posts');
  assert.ok(model);

  let service = registry.lookupFactory('service:posts');
  assert.ok(service);

  let adapter = registry.lookupFactory('adapter:posts');
  assert.ok(adapter);

  let serializer = registry.lookupFactory('serializer:posts');
  assert.ok(serializer);
});
