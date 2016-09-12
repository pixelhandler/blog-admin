import Ember from 'ember';
import ApplicationErrorsMixin from 'blog-admin/mixins/application-errors';
import { module, test } from 'qunit';

module('Unit | Mixin | application errors');

// Replace this with your real tests.
test('it works', function(assert) {
  let ApplicationErrorsObject = Ember.Object.extend(ApplicationErrorsMixin);
  let subject = ApplicationErrorsObject.create();
  assert.ok(subject);
});
