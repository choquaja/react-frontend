import Validator from 'validatorjs';

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
