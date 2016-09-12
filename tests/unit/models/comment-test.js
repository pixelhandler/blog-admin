import { moduleFor, test } from 'ember-qunit';
import Model from '../../../models/comment';
import Ember from 'ember';

moduleFor('model:comment', 'Unit | Model | comment', {
  // Specify the other units that are required for this test.
  needs: ['model:post', 'model:commenter'],
  beforeEach() {
    let opts = { instantiate: false, singleton: false };
    this.registry.register('model:comment', Model, opts);
  },
  afterEach() {
    this.registry.unregister('model:comment');
  }
});

test('comments has "type" property set to: comments', function(assert) {
  let owner = (typeof Ember.getOwner === 'function') ? Ember.getOwner(this) : this.container;
  let model = owner.lookup('model:comment').create();
  assert.equal(model.get('type'), 'comments', 'resource has expected type');
});
