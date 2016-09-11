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
});

export default Router;
