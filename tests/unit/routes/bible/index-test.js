import { moduleFor, test } from 'ember-qunit';

moduleFor('route:bible/index', 'Unit | Route | bible/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['service:router-scroll', 'service:scheduler']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
