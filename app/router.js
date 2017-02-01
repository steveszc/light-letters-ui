import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bibles');
  this.route('bible', { path: '/:bible' }, function() {
    this.route('book', { path: '/:book' }, function() {
      this.route('chapter', { path: '/:chapter' }, function() {
        this.route('verse', { path: '/:verse' });
      });
    });
  });
  this.route('not-found', { path: '/*path' });
});

export default Router;
