import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var transactions = this.modelFor('account.transactions');
    return transactions.findBy('id', params.transaction_id);
  },

  renderTemplate: function() {
    // Here we need to render the template for the modal dialog
  },

  actions: {
    close: function() {
      // Here we want to destroy the modal and transition back to the transaction list
    }
  }
});
