import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BancoENV.locationType
});

Router.map(function() {
  this.resource('accounts');
  this.resource('transfers');
});

export default Router;
