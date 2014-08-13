import Ember from 'ember';

export default Ember.ObjectController.extend({
  payees:   null,
  accounts: null,

  actions: {
    submit: function() {
      var controller = this;

      this.get('model').save().then(function(transfer) {
        controller.transitionToRoute('transfers.confirm', transfer);
      }, Ember.K);
    }
  }
});
