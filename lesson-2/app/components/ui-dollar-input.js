import Ember from 'ember';

export default Ember.TextField.extend({
  classNames: 'ui-dollar-input',
  cents: null,

  formatValue: function() {
    var cents;
    var value   = this.$().val();
    var dollars = parseFloat(value, 10);

    if (isNaN(dollars) || Ember.isNone(dollars)) {
      cents   = 0;
      dollars = 0;
    } else {
      cents = (dollars * 100).toFixed(0);
    }

    this.set('cents', cents);
    this.set('value', dollars.toFixed(2));
  }.on('focusOut'),

  value: function() {
    var cents = this.get('cents');

    if (cents) {
      return (cents / 100).toFixed(2);
    } else {
      return '0.00';
    }
  }.property('cents')
});
