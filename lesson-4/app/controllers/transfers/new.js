import Ember from 'ember';

export default Ember.ObjectController.extend({
  payees:   null,
  accounts: null,

  actions: {
    submit: function() {
      // we need to call save() on the model object
      // once save() is completed we want to transition to
      // 'transfers.confirm'
    }
  }
});
