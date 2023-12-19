import { Serializer as ValueOfSizeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ready2use-value-of-size';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ValueOfSizeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
