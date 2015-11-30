export function initialize(application) {
  application.inject('service:store', 'authors', 'service:authors');
  application.inject('service:authors', 'serializer', 'serializer:author');
}

export default {
  name: 'authors-service',
  after: 'store',
  initialize: initialize
};
