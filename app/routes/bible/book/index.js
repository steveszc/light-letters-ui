import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import fetch from 'ember-network/fetch';

export default Route.extend({
  model() {
    let url = `https://light-letters-api.herokuapp.com/api/books/${this.paramsFor('bible').bible}:${this.paramsFor('bible.book').book}/chapters.js`;

    return hash({
      book: this.modelFor('bible.book'),
      chapters: fetch(url)
        .then(response => response.json())
        .then(json => json.response.chapters)
    });
  }
});
