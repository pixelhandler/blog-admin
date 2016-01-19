import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, error) {
    let title = 'Oops, this post is borked…';
    let code = error.code || error.get('code');
    if (code) {
      if (code >= 500) {
        title = 'Oops, there was a server error…';
      } else if (code === 404) {
        title = "Opps, can't find this one…";
      }
      controller.set('title', title);
    }
    this._super(controller, error);
  }
});
