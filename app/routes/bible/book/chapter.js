import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model(params) {
    let url = `https://light-letters-api.herokuapp.com/api/chapters/${this.paramsFor('bible').bible}:${this.paramsFor('bible.book').book}.${params.chapter}.js`;

    return fetch(url)
      .then(response => response.json())
      .then(json => json.response.chapters[0]);
  }
});
