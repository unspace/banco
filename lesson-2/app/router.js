import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BancoENV.locationType
});

Router.map(function() {
  this.resource('accounts');

  this.resource('account', { path: '/accounts/:account_id' }, function() {
    this.route('transactions', { path: '/' }, function() {
    });
  });

  this.resource('transfers', function() {
  });

  this.route('modelNotFound');
});

export default Router;
