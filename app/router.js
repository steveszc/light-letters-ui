import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
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
