import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  lvlCompress: DS.attr('number'),
  method: DS.belongsTo('i-i-s-ready2use-method', { inverse: null, async: false }),
  uploadFile: DS.belongsTo('i-i-s-ready2use-upload-file', { inverse: null, async: false })
});

export let ValidationRules = {
  lvlCompress: {
    descriptionKey: 'models.i-i-s-ready2use-optimize.validations.lvlCompress.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  method: {
    descriptionKey: 'models.i-i-s-ready2use-optimize.validations.method.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  uploadFile: {
    descriptionKey: 'models.i-i-s-ready2use-optimize.validations.uploadFile.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OptimizeE', 'i-i-s-ready2use-optimize', {
    lvlCompress: attr('Lvl compress', { index: 0 })
  });

  modelClass.defineProjection('OptimizeL', 'i-i-s-ready2use-optimize', {
    lvlCompress: attr('Lvl compress', { index: 0 })
  });
};
