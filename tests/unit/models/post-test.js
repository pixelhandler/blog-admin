import { moduleFor, test } from 'ember-qunit';
import Resource from '../../../models/post';

moduleFor('model:post', 'Unit | Model | post', {
  beforeEach() {
    const opts = { instantiate: false, singleton: false };
    Resource.prototype.container = this.container;
    // Use a non-standard name, i.e. pluralized instead of singular
    this.container.register('model:posts', Resource, opts);
  },
  afterEach() {
    delete Resource.prototype.container;
  }
});

test('it exists', function(assert) {
  var model = this.container.lookupFactory('model:posts').create();
  assert.equal(model.get('type'), 'posts', 'resource has expected type');
});
