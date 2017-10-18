import Component from '@ember/component';

export default Component.extend({
  click(e) {
    if (e.target.tagName === 'SPAN') {
      this.get('pickVerse')(e.target.className.slice(e.target.className.lastIndexOf('_')+1));
    }
  }
});
