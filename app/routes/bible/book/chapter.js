import Ember from 'ember';
import fetch from 'ember-network/fetch';
import config from 'light-letters/config/environment';

export default Ember.Route.extend({
  model(params) {
    return fetch(`https://api.biblia.com/v1/bible/content/${this.paramsFor('bible').bible}.txt.json?passage=${this.paramsFor('bible.book').book}${params.chapter}&key=${config.biblia_key}`)
      .then(function(response) {
        return response.json();
      });
  }
});
