import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as MethodMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-method';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(MethodMixin, Validations, {
});

defineProjections(Model);

export default Model;
