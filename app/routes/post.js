import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let found = this.store.all('posts').filter((post) => {
        return post.get('id') === params.post_id;
      });
      if (found.get('length') > 0) {
        resolve(found[0]);
      } else {
        let options = {
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
    });
  }
});
