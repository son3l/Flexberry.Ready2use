import {
  defineNamespace,
  defineProjections,
  Model as OptimizeMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-optimize';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(OptimizeMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
