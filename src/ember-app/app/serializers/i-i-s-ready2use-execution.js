import { Serializer as ExecutionSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ready2use-execution';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ExecutionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
