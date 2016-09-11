import Resource from '../models/author';

export function initialize() {
  // see http://emberjs.com/deprecations/v2.x/#toc_initializer-arity
  let application = arguments[1] || arguments[0];
  application.register('model:author', Resource, { instantiate: false, singleton: false });
  application.inject('service:store', 'authors', 'service:authors');
  application.inject('service:authors', 'serializer', 'serializer:author');
}

export default {
  name: 'authors-service',
  after: 'store',
  initialize: initialize
};
