import {
  defineNamespace,
  defineProjections,
  Model as NoNOptFileMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-no-n-opt-file';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(NoNOptFileMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
