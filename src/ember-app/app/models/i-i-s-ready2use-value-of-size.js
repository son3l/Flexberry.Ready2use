import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ValueOfSizeMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-value-of-size';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ValueOfSizeMixin, Validations, {
});

defineProjections(Model);

export default Model;
