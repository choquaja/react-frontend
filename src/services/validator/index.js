import Validator from 'validatorjs';

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
    return instance.errors.all();
  };
}
