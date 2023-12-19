import {
  defineNamespace,
  defineProjections,
  Model as ExecutionMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-execution';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ExecutionMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
