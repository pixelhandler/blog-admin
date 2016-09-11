import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, hasMany } from 'ember-jsonapi-resources/models/resource';

let AuthorModel = Resource.extend({
  type: 'authors',
  service: Ember.inject.service('authors'),

  "name": attr('string'),
  "email": attr('string'),
  "posts": hasMany('posts')
});

AuthorModel.reopenClass({

  getDefaults() {
    return {
      attributes: {}
    };
  }
});

export default AuthorModel;
