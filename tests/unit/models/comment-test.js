import { moduleFor, test } from 'ember-qunit';
import Resource from '../../../models/comment';

moduleFor('model:comment', 'Unit | Model | comment', {
  beforeEach() {
    const opts = { instantiate: false, singleton: false };
    Resource.prototype.container = this.container;
    // Use a non-standard name, i.e. pluralized instead of singular
    this.container.register('model:comments', Resource, opts);
  },
  afterEach() {
    delete Resource.prototype.container;
  }
});

test('it exists', function(assert) {
  var model = this.container.lookupFactory('model:comments').create();
  assert.equal(model.get('type'), 'comments', 'resource has expected type');
});
