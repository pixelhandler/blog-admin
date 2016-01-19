import Ember from 'ember';
import BufferedProxy from 'ember-buffered-proxy/proxy';

export default Ember.Component.extend({
  tagName: 'form',

  resource: Ember.computed('post', function() {
    return BufferedProxy.create({ content: this.get('post') });
  }).readOnly(),

  isNew: null,
  isEditing: true,

  focusOut() {
    if (!this.get('isNew')) {
      this.get('resource').applyChanges();
      this.set('isEditing', false);
      let action = this.get('on-edit');
      if (typeof action === 'function') {
        action(this.get('post'), function callback() {
          this.set('isEditing', true);
        }.bind(this));
      }
    }
  },

  actions: {
    edit() {
      this.set('isEditing', true);
    },
    done() {
      this.set('isEditing', false);
    },
    save() {
      this.set('isEditing', false);
      this.get('resource').applyChanges();
      this.sendAction('on-save', this.get('post'));
    },
    cancel() {
      this.set('isEditing', false);
      this.get('resource').discardChanges();
      this.sendAction('on-cancel');
    }
  }
});
