import Resource from '../models/comment';

export function initialize() {
  // see http://emberjs.com/deprecations/v2.x/#toc_initializer-arity
  let application = arguments[1] || arguments[0];
  application.register('model:comment', Resource, { instantiate: false, singleton: false });
  application.inject('service:store', 'comments', 'service:comments');
  application.inject('service:comments', 'serializer', 'serializer:comment');
}

export default {
  name: 'comments-service',
  after: 'store',
  initialize: initialize
};
