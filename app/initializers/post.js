import Resource from '../models/post';

export function initialize() {
  // see http://emberjs.com/deprecations/v2.x/#toc_initializer-arity
  let application = arguments[1] || arguments[0];
  application.register('model:post', Resource, { instantiate: false, singleton: false });
  application.inject('service:store', 'posts', 'service:posts');
  application.inject('service:posts', 'serializer', 'serializer:post');
}

export default {
  name: 'posts-service',
  after: 'store',
  initialize: initialize
};
