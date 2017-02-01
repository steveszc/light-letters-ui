import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return { verse: params.verse };
  }
});
