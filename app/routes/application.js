import Ember from 'ember';

export default Ember.Route.extend({
  errorMessage: null,
  errorDetails: null,

  actions: {
    dismissErrorMessage() {
      this.controllerFor('application').setProperties({
        'errorMessage': null,
        'errorDetails': null
      });
    }
  }
});
