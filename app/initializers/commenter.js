export function initialize(application) {
  application.inject('service:store', 'commenters', 'service:commenters');
  application.inject('service:commenters', 'serializer', 'serializer:commenter');
}

export default {
  name: 'commenters-service',
  after: 'store',
  initialize: initialize
};
