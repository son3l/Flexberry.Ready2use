import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ExecutionMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-execution';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ExecutionMixin, Validations, {
});

defineProjections(Model);

export default Model;
