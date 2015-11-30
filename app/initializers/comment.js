export function initialize(application) {
  application.inject('service:store', 'comments', 'service:comments');
  application.inject('service:comments', 'serializer', 'serializer:comment');
}

export default {
  name: 'comments-service',
  after: 'store',
  initialize: initialize
};
