import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      session: this.store.find('session', 'current')
    });
  },

  setupController: function(_, data) {
    this.controllerFor('session').set('model', data.session);
  },

  title: function(tokens) {
    if (tokens.length) {
      return tokens.join(' / ') + ' - Banco';
    } else {
      return 'BFG - Banco Financial Group';
    }
  }
});
