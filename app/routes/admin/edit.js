import Ember from 'ember';
import ApplicationErrorsMixin from 'blog-admin/mixins/application-errors';

export default Ember.Route.extend(ApplicationErrorsMixin, {
  model(params) {
    return this.store.find('posts', params.edit_id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('isEditing', true);
  },

  actions: {
    update(model, callback) {
      return this.store.updateResource('posts', model)
      .finally(function() {
        if (typeof callback === 'function') {
          callback();
        }
      })
      .catch(function(error) {
        model.rollback();
        this.send('error', error);
      }.bind(this));
    },

    error(error) {
      if (error.code === 422 || error.code === 400) {
        this.handleApplicationError(error);
      } else {
        this.intermediateTransitionTo('admin.edit_error', error);
      }
    }
  }
});

