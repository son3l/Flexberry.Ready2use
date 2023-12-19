import {
  defineNamespace,
  defineProjections,
  Model as MethodMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-method';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(MethodMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
