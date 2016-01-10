import { moduleFor, test } from 'ember-qunit';
import Model from '../../../models/commenter';
import Ember from 'ember';

moduleFor('model:commenter', 'Unit | Model | commenter', {
  // Specify the other units that are required for this test.
  needs: ['model:comment'],
  beforeEach() {
    let opts = { instantiate: false, singleton: false };
    this.registry.register('model:commenter', Model, opts);
  },
  afterEach() {
    this.registry.unregister('model:commenter');
  }
});

test('commenters has "type" property set to: commenters', function(assert) {
  let owner = (typeof Ember.getOwner === 'function') ? Ember.getOwner(this) : this.container;
  let model = owner.lookup('model:commenter').create();
  assert.equal(model.get('type'), 'commenters', 'resource has expected type');
});
