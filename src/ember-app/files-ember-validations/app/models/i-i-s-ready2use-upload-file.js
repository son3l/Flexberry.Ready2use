import {
  defineNamespace,
  defineProjections,
  Model as UploadFileMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-upload-file';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(UploadFileMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
