import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as NoNOptFileMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-no-n-opt-file';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(NoNOptFileMixin, Validations, {
});

defineProjections(Model);

export default Model;
