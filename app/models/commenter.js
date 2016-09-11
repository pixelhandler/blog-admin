import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, hasMany } from 'ember-jsonapi-resources/models/resource';

let CommenterModel = Resource.extend({
  type: 'commenters',
  service: Ember.inject.service('commenters'),

  "name": attr('string'),
  "email": attr('string'),
  "hash": attr(),
  "comments": hasMany('comments')
});

CommenterModel.reopenClass({

  getDefaults() {
    return {
      attributes: {}
    };
  }
});

export default CommenterModel;
