import { moduleFor, test } from 'ember-qunit';
import Model from '../../../models/author';
import Ember from 'ember';

moduleFor('model:author', 'Unit | Model | author', {
  // Specify the other units that are required for this test.
  needs: [],
  beforeEach() {
    let opts = { instantiate: false, singleton: false };
    this.registry.register('model:author', Model, opts);
  },
  afterEach() {
    this.registry.unregister('model:author');
  }
});

test('authors has "type" property set to: authors', function(assert) {
  let owner = (typeof Ember.getOwner === 'function') ? Ember.getOwner(this) : this.container;
  let model = owner.lookup('model:author').create();
  assert.equal(model.get('type'), 'authors', 'resource has expected type');
});
