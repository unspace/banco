import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // we need to create a new trasfer here
  },

  afterModel: function() {
    var controller = this.controllerFor('transfers/new');
    var promise;

    promise = Ember.RSVP.hash({
      payees:   this.store.find('payee'),
      accounts: this.store.find('account')
    });

    promise.then(function(data) {
      controller.setProperties(data);
    });

    return promise;
  },

  actions: {
    willTransition: function(transition) {
      // if the user tries to leave the route
      // before saving the transfer we should destroy the model

      // if the trasfer is being saved we want to prevent the transition from happening
    }
  }
});
