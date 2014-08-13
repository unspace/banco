import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // load transactions HERE
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('account', this.modelFor('account'));
  }
});
