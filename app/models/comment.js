import Ember from 'ember';
import Resource from 'ember-jsonapi-resources/models/resource';
import { attr, toOne } from 'ember-jsonapi-resources/models/resource';

let CommentModel = Resource.extend({
  type: 'comments',
  service: Ember.inject.service('comments'),

  "body": attr('string'),
  "post": toOne('post'),
  "commenter": toOne('commenter')
});

CommentModel.reopenClass({

  getDefaults() {
    return {
      attributes: {}
    };
  }
});

export default CommentModel;
