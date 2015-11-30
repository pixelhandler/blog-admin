export function initialize(application) {
  application.inject('service:store', 'posts', 'service:posts');
  application.inject('service:posts', 'serializer', 'serializer:post');
}

export default {
  name: 'posts-service',
  after: 'store',
  initialize: initialize
};
