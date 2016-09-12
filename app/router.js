import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('application-error');
  this.route('post', { path: '/:post_id' }, function () {
    this.route('detail', { path: '/' });
  });
  //this.route('post-error');

  this.route('admin', function() {
    this.route('create');
    this.route('edit');
    this.route('edit', { path: ':edit_id' });
    //this.route('edit-error');
  });
});

export default Router;
