import { Serializer as UploadFileSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ready2use-upload-file';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(UploadFileSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
