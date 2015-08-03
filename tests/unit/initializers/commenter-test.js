import Ember from 'ember';
import { initialize } from '../../../initializers/commenter';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | commenter', {
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

  let model = registry.lookupFactory('model:commenters');
  assert.ok(model);

  let service = registry.lookupFactory('service:commenters');
  assert.ok(service);

  let adapter = registry.lookupFactory('adapter:commenters');
  assert.ok(adapter);

  let serializer = registry.lookupFactory('serializer:commenters');
  assert.ok(serializer);
});
