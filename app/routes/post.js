import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      const found = this.store.all('posts').filter(function (post) {
        return post.get('id') === params.post_id;
      });
      if (found.get('length') > 0) {
        resolve(found[0]);
      } else {
        const options = {
          id: params.post_id,
          query: { include: 'author,comments' }
        };
        this.store.find('post', options).then(
          function (post) {
            resolve(post);
          },
          function (error) {
            reject(error);
          }
        );
      }
    }.bind(this));
  },

  actions: {
    /*
      Don't do this…
      See: https://github.com/emberjs/ember.js/issues/12791#issuecomment-170675020

    error(error) {
      Ember.Logger.error(error);
      this.intermediateTransitionTo('application_error', e)
    }
    */
  }
});

