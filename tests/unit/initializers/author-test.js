import Ember from 'ember';
import { initialize } from '../../../initializers/author';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | author', {
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

  let model = registry.lookupFactory('model:authors');
  assert.ok(model);

  let service = registry.lookupFactory('service:authors');
  assert.ok(service);

  let adapter = registry.lookupFactory('adapter:authors');
  assert.ok(adapter);

  let serializer = registry.lookupFactory('serializer:authors');
  assert.ok(serializer);
});
