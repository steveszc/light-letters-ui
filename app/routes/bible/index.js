import Ember from 'ember';
import fetch from 'ember-network/fetch';
import config from 'light-letters/config/environment';

export default Ember.Route.extend({
  model() {
    let url = `https://api.biblia.com/v1/bible/contents/${this.paramsFor('bible').bible}?key=${config.biblia_key}`;

    return Ember.RSVP.hash({
      bible: this.modelFor('bible'),
      toc: fetch(url).then(response => response.json())
    });
  }
});
