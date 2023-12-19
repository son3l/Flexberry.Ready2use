import { Serializer as NoNOptFileSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ready2use-no-n-opt-file';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(NoNOptFileSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
