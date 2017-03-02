import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chapter-text', 'Integration | Component | chapter text', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  this.set('text', 'bible verse');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chapter-text text=text}}`);

  assert.equal(this.$().text().trim(), 'bible verse');

});
