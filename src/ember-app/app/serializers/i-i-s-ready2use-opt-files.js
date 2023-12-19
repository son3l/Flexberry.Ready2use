import { Serializer as OptFilesSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ready2use-opt-files';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OptFilesSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
