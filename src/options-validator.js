import * as hoek from '@hapi/hoek';

/**
 * @deprecated this function has been lifted to the @form8ion/core package and will be removed in the next major
 * version. please use that version instead
 */
export default function (schema, options) {
  const {error, value} = schema.validate(options);

  hoek.assert(!error, error);

  return value;
}
