import Route from '@ember/routing/route';
import fetch from 'ember-network/fetch';

export default Route.extend({
  model() {
    let url = 'https://light-letters-api.herokuapp.com/api/versions.js?language=eng-US';

    return fetch(url)
      .then(response => response.json())
      .then(json => json.response);
  }
});
