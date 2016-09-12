import { moduleFor, test } from 'ember-qunit';
import Model from '../../../models/post';
import Ember from 'ember';

moduleFor('model:post', 'Unit | Model | post', {
  // Specify the other units that are required for this test.
  needs: ['model:author', 'model:comment'],
  beforeEach() {
    let opts = { instantiate: false, singleton: false };
    this.registry.register('model:post', Model, opts);
  },
  afterEach() {
    this.registry.unregister('model:post');
  }
});

test('posts has "type" property set to: posts', function(assert) {
  let owner = (typeof Ember.getOwner === 'function') ? Ember.getOwner(this) : this.container;
  let model = owner.lookup('model:post').create();
  assert.equal(model.get('type'), 'posts', 'resource has expected type');
});
