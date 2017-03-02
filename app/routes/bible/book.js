import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model(params) {
    let url = `https://light-letters-api.herokuapp.com/api/books/${this.paramsFor('bible').bible}:${params.book}.js`;

    return fetch(url)
      .then(response => response.json())
      .then(json => json.response.books[0]);
  }
});
