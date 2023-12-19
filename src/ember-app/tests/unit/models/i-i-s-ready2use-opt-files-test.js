import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ready2use-opt-files', 'Unit | Model | i-i-s-ready2use-opt-files', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-ready2use-download-file',
    'model:i-i-s-ready2use-execution',
    'model:i-i-s-ready2use-method',
    'model:i-i-s-ready2use-no-n-opt-file',
    'model:i-i-s-ready2use-opt-files',
    'model:i-i-s-ready2use-optimize',
    'model:i-i-s-ready2use-upload-file',
    'model:i-i-s-ready2use-value-of-size',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
