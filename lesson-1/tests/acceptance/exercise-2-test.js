import Ember from 'ember';
import startApp from '../helpers/start-app';
var App;

module('Acceptance: Lesson 1 - Exercise 2', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('application has wordmark', function() {
  visit('/');

  andThen(function() {
    equal(find('header .logo svg').length, 1);
  });
});

test('wordmark links to index', function() {
  visit('/loading');

  andThen(function() {
    equal(currentPath(), 'loading');
  });

  click('header .logo svg');

  andThen(function() {
    equal(currentPath(), 'index');
  });
});

test('shows the username in the header (from session)', function() {
  visit('/');

  andThen(function() {
    equal(find('header nav li').first().text(), 'Carsten Nielsen');
  });
});

test('shows the year in the footer (with a CP)', function() {
  visit('/');

  andThen(function() {
    ok(find('footer span').first().text().match(/2014/));
  });
});

