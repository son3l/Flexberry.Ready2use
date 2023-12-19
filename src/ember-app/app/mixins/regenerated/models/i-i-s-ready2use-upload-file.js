import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  pathToFile: DS.attr('string'),
  noNOptFile: DS.belongsTo('i-i-s-ready2use-no-n-opt-file', { inverse: null, async: false })
});

export let ValidationRules = {
  pathToFile: {
    descriptionKey: 'models.i-i-s-ready2use-upload-file.validations.pathToFile.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  noNOptFile: {
    descriptionKey: 'models.i-i-s-ready2use-upload-file.validations.noNOptFile.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('UploadFileE', 'i-i-s-ready2use-upload-file', {
    pathToFile: attr('Path to file', { index: 0 })
  });

  modelClass.defineProjection('UploadFileL', 'i-i-s-ready2use-upload-file', {
    pathToFile: attr('Path to file', { index: 0 })
  });
};
