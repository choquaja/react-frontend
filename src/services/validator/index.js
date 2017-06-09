import Validator from 'validatorjs';
import set from 'lodash/set';

Validator.register(
  'projectName',
  value => value && /^[\w-]+$/.test(value),
  'The :attribute can only contain letters, numbers, dashes, and underscores.',
);

export default function validator(rules = {}, customErrorMessages = {}) {
  const errorMessages = {
    required: 'This field is required.',
    ...customErrorMessages,
  };
  return (values) => {
    const instance = new Validator(values, rules, errorMessages);
    instance.passes();
    const flatErrors = instance.errors.all();
    // validatorjs returns errors of nested fields with flat
    // names e.g. config: { type: <field> } is 'config.type'.
    // redux-form needs the flat field names unnested.
    // We use lodash's set to deeply set the field names
    // safely.
    return Object.keys(flatErrors).reduce(
      (obj, key) => set(obj, key, flatErrors[key]),
      {},
    );
  };
}
