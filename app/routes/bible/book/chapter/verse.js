import Ember from 'ember';

export default Ember.Route.extend({
  // model(params) {
  //   return { verse: params.verse };
  // }
  model(params) {
    let url = `https://light-letters-api.herokuapp.com/api/verses/${this.paramsFor('bible').bible}:${this.paramsFor('bible.book').book}.${this.paramsFor('bible.book.chapter').chapter}.${params.verse}.js`;

    return fetch(url)
      .then(response => response.json())
      .then(json => json.response.verses[0]);
  }
});
