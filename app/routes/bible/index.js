import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    let url = `https://light-letters-api.herokuapp.com/api/versions/${this.paramsFor('bible').bible}/books.js`;

    return Ember.RSVP.hash({
      bible: this.modelFor('bible'),
      testaments: ['OT', 'DEUT', 'NT'],
      books: fetch(url)
        .then(response => response.json()
        .then(json => json.response.books))
    });
  }
});
