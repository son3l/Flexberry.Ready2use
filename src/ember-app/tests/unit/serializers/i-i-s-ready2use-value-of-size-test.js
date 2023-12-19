import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ready2use-value-of-size', 'Unit | Serializer | i-i-s-ready2use-value-of-size', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-ready2use-value-of-size',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
