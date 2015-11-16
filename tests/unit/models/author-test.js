import { moduleFor, test } from 'ember-qunit';
import Resource from '../../../models/author';

moduleFor('model:author', 'Unit | Model | author', {
  beforeEach() {
    const opts = { instantiate: false, singleton: false };
    Resource.prototype.container = this.container;
    // Use a non-standard name, i.e. pluralized instead of singular
    this.registry.register('model:authors', Resource, opts);
  },
  afterEach() {
    delete Resource.prototype.container;
  }
});

test('it exists', function(assert) {
  var model = this.container.lookupFactory('model:authors').create();
  assert.equal(model.get('type'), 'authors', 'resource has expected type');
});