import Ember from 'ember';

export default Ember.Mixin.create({

  handleApplicationError(error) {
    let details = this.handleUnprocessableEntities(error);
    details = details || this.handleBadRequest(error);
    this.controllerFor('application').setProperties({
      'errorMessage': error.message,
      'errorDetails': details || undefined
    });
  },

  handleBadRequest(error) {
    if (error.code !== 400 || !error.errors.length) { return; }
    // See https://github.com/cerebris/jsonapi-resources#error-codes
    let errors = error.errors.filterBy('code', 105);
    errors = errors.mapBy('detail');
    return (!errors) ? '' : errors.join(' ');
  },

  handleUnprocessableEntities(error) {
    if (error.code !== 422 || !error.errors.length) { return; }
    // See https://github.com/cerebris/jsonapi-resources#error-codes
    let errors = error.errors.filterBy('code', 100);
    let fields = errors.map(function(error) {
      let paths = error.source.pointer.split('/');
      let attr = paths[paths.length - 1].split('_');
      attr = attr.map(function(str) {
        return Ember.String.capitalize(str);
      });
      return attr.join(' ');
    });
    return (!fields) ? '' : 'Invalid fields: ' + fields.join(', ') + '.';
  }
});
