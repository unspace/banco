import Ember from 'ember';
import startApp from '../helpers/start-app';
var App;

module('Acceptance: Lesson 1 - Exercise 1', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /', function() {
  visit('/');

  andThen(function() {
    equal(currentPath(), 'index');
  });
});

test('Welcomes you to the app', function() {
  visit('/');

  andThen(function() {
    findFirstAndCheckText('#welcome', 'Welcome to Banco');
  });
});
