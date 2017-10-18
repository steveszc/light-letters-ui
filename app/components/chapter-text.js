import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  click(e) {
    if (e.target.tagName === 'SPAN') {
      get(this, 'pickVerse')(e.target.className.slice(e.target.className.lastIndexOf('_')+1));
    }
  }
});
