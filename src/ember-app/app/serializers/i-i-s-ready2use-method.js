import { Serializer as MethodSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ready2use-method';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MethodSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
