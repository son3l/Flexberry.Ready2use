import {
  defineNamespace,
  defineProjections,
  Model as ValueOfSizeMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-value-of-size';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ValueOfSizeMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
