import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update(model, callback) {
      this.get('target').send('update', model, callback);
    }
  }
});
