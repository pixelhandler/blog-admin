import { moduleFor, test } from 'ember-qunit';
import Resource from '../../../models/commenter';

moduleFor('model:commenter', 'Unit | Model | commenter', {
  beforeEach() {
    const opts = { instantiate: false, singleton: false };
    Resource.prototype.container = this.container;
    // Use a non-standard name, i.e. pluralized instead of singular
    this.container.register('model:commenters', Resource, opts);
  },
  afterEach() {
    delete Resource.prototype.container;
  }
});

test('it exists', function(assert) {
  var model = this.container.lookupFactory('model:commenters').create();
  assert.equal(model.get('type'), 'commenters', 'resource has expected type');
});
