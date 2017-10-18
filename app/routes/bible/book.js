import Route from '@ember/routing/route';
import fetch from 'ember-network/fetch';

export default Route.extend({
  model(params) {
    let url = `https://light-letters-api.herokuapp.com/api/books/${this.paramsFor('bible').bible}:${params.book}.js`;

    return fetch(url)
      .then(response => response.json())
      .then(json => json.response.books[0]);
  }
});
