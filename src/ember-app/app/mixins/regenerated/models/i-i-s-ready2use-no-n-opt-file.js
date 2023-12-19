import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  date: DS.attr('date'),
  name: DS.attr('string'),
  repository: DS.attr('string'),
  size: DS.attr('number'),
  execution: DS.belongsTo('i-i-s-ready2use-execution', { inverse: null, async: false }),
  valueOfSize: DS.belongsTo('i-i-s-ready2use-value-of-size', { inverse: null, async: false })
});

export let ValidationRules = {
  date: {
    descriptionKey: 'models.i-i-s-ready2use-no-n-opt-file.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-ready2use-no-n-opt-file.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  repository: {
    descriptionKey: 'models.i-i-s-ready2use-no-n-opt-file.validations.repository.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  size: {
    descriptionKey: 'models.i-i-s-ready2use-no-n-opt-file.validations.size.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  execution: {
    descriptionKey: 'models.i-i-s-ready2use-no-n-opt-file.validations.execution.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  valueOfSize: {
    descriptionKey: 'models.i-i-s-ready2use-no-n-opt-file.validations.valueOfSize.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NoNOptFileE', 'i-i-s-ready2use-no-n-opt-file', {
    date: attr('Date', { index: 0 }),
    repository: attr('Repository', { index: 1 }),
    name: attr('Name', { index: 2 }),
    size: attr('Size', { index: 3 })
  });

  modelClass.defineProjection('NoNOptFileL', 'i-i-s-ready2use-no-n-opt-file', {
    date: attr('Date', { index: 0 }),
    repository: attr('Repository', { index: 1 }),
    name: attr('Name', { index: 2 }),
    size: attr('Size', { index: 3 })
  });
};
