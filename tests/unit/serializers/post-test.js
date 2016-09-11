import { moduleFor, test } from 'ember-qunit';
import Resource from '../../../models/post';
import Ember from 'ember';

moduleFor('serializer:post', 'Unit | Serializer | post', {
  beforeEach() {
    if (typeof Ember.setOwner === 'function') {
      Ember.setOwner(Resource.prototype, Ember.getOwner(this));
    } else {
      Resource.prototype.container = this.container;
    }
    let opts = { instantiate: false, singleton: false };
    this.registry.register('model:post', Resource, opts);
  },
  afterEach() {
    delete Resource.prototype.container;
  }
});

// Replace this with your real tests.
test('it serializes resources', function(assert) {
  let owner = (typeof Ember.getOwner === 'function') ? Ember.getOwner(this) : this.container;
  let resource = owner.lookup('model:post').create();
  let serializer = this.subject();
  var serializedResource = serializer.serialize(resource);
  assert.equal(serializedResource.data.type, 'posts', 'serializes a post resource');
});
