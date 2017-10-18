import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import fetch from 'ember-network/fetch';

export default Route.extend({
  model() {
    let url = `https://light-letters-api.herokuapp.com/api/versions/${this.paramsFor('bible').bible}/books.js`;

    return hash({
      bible: this.modelFor('bible'),
      testaments: ['OT', 'DEUT', 'NT'],
      books: fetch(url)
        .then(response => response.json()
        .then(json => json.response.books))
    });
  }
});
