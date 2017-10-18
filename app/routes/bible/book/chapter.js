import Route from '@ember/routing/route';
import fetch from 'ember-network/fetch';

export default Route.extend({
  model(params) {
    let url = `https://light-letters-api.herokuapp.com/api/chapters/${this.paramsFor('bible').bible}:${this.paramsFor('bible.book').book}.${params.chapter}.js`;

    return fetch(url)
      .then(response => response.json())
      .then(json => json.response.chapters[0]);
  }
});
