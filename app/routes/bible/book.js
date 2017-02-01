import Ember from 'ember';
import fetch from 'ember-network/fetch';
import config from 'light-letters/config/environment';

export default Ember.Route.extend({
  model(params) {
    return fetch(`https://api.biblia.com/v1/bible/contents/${this.paramsFor('bible').bible}?key=${config.biblia_key}`)
      .then(function(response) {
        return response.json().then(json => json.books.filter(book => book.passage.toLowerCase() === params.book.toLowerCase())[0]);
      });
  }
});
