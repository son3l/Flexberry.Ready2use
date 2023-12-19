import {
  defineNamespace,
  defineProjections,
  Model as DownloadFileMixin
} from '../mixins/regenerated/models/i-i-s-ready2use-download-file';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(DownloadFileMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
