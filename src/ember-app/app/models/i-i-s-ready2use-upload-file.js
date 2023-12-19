import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as UploadFileMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-upload-file';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(UploadFileMixin, Validations, {
});

defineProjections(Model);

export default Model;
