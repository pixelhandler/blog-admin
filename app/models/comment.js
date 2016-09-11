import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, hasOne } from 'ember-jsonapi-resources/models/resource';

let CommentModel = Resource.extend({
  type: 'comments',
  service: Ember.inject.service('comments'),

  "body": attr('string'),
  "post": hasOne('post'),
  "commenter": hasOne('commenter')
});

CommentModel.reopenClass({

  getDefaults() {
    return {
      attributes: {}
    };
  }
});

export default CommentModel;
