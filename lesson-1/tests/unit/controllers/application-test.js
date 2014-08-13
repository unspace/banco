import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:application', 'ApplicationController', {
  setup: function () {},
  teardown: function () {},
  needs: ['controller:session']
});

test('Lesson 1 - Exercice 2 - it provides the current year', function(){
  equal(this.subject().get('year'), new Date().getFullYear());
});
