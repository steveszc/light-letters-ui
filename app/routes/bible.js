import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model(params) {
    return fetch(`https://light-letters-api.herokuapp.com/api/versions/${params.bible}.js`)
      .then(response => response.json())
      .then(json => json.response.versions[0]);
  }
});
