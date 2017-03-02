import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    navigateToVerse(verse) {
      this.transitionTo('bible.book.chapter.verse', verse);
    }
  }
});
