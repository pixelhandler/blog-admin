import Ember from 'ember';
import ApplicationErrorsMixin from 'blog-admin/mixins/application-errors';

export default Ember.Route.extend(ApplicationErrorsMixin, {
  beforeModel() {
    return this.store.find('authors').then(function (authors) {
      this.set('authors', authors);
    }.bind(this));
  },

  model() {
    return this.container.lookupFactory('model:post').create({
      isNew: true,
      attributes: { date: new Date() }
    });
  },

  afterModel(resource) {
    const author = this.get('authors.firstObject');
    resource.addRelationship('author', author.get('id'));
    return resource;
  },

  actions: {
    save(resource) {
      this.store.createResource('posts', resource).then(function(resp) {
        let collection = this.modelFor('admin.index');
        if (collection) { collection.addObject(resp); }
        collection = this.modelFor('index');
        if (collection) { collection.addObject(resp); }
        this.transitionTo('admin.index');
      }.bind(this))
      .catch(function(error) {
        this.handleCreateError(error);
      }.bind(this));
    },

    cancel() {
      this.transitionTo('admin.index');
    }
  },

  deactivate() {
    this.modelFor('admin.create').destroy();
  },

  handleCreateError(error) {
    let doTransitionToError = true;
    if (error.code === 422 || error.code === 400) {
      doTransitionToError = false;
      this.handleApplicationError(error);
    }
    if (doTransitionToError) {
      this.intermediateTransitionTo('application_error', error);
    }
  }
});

