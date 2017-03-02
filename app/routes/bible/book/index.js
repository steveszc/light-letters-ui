import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    let url = `https://light-letters-api.herokuapp.com/api/books/${this.paramsFor('bible').bible}:${this.paramsFor('bible.book').book}/chapters.js`;

    return Ember.RSVP.hash({
      book: this.modelFor('bible.book'),
      chapters: fetch(url)
        .then(response => response.json())
        .then(json => json.response.chapters)
    });
  }
});
