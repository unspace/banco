import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'session',

  session: Ember.computed.alias('controllers.session'),
});
