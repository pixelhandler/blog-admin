import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, toOne, toMany } from 'ember-jsonapi-resources/models/resource';

let PostModel = Resource.extend({
  type: 'posts',
  service: Ember.inject.service('posts'),

  "oops": attr(), // used to test bad request, 400 errors
  "title": attr('string'),
  "slug": attr('string'),
  "date": attr(),
  "excerpt": attr('string'),
  "body": attr('string'),
  "author": toOne('author'),
  "comments": toMany('comments')
});

PostModel.reopenClass({

  getDefaults() {
    return {
      attributes: {}
    };
  }
});

export default PostModel;
