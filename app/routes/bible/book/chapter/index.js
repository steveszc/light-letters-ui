import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    navigateToVerse(verse) {
      this.transitionTo('bible.book.chapter.verse', verse);
    }
  }
});
