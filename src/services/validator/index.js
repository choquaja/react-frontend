import Validator from 'validatorjs';

// function lowercaseTest(value) {
//   return value && /[a-z]/.test(value);
// }
//
// function uppercaseTest(value) {
//   return value && /[A-Z]/.test(value);
// }
//
// function digitTest(value) {
//   return value && /[\d]/.test(value);
// }
//
// function lengthTest(value) {
//   return value && value.length >= 8;
// }
//
// // From https://gist.github.com/ShirtlessKirk/2134376
// var creditcardTest = (function (arr) {
//     return function (ccNum) {
//         var
//             len = ccNum.length,
//             bit = 1,
//             sum = 0,
//             val;
//
//         while (len) {
//             val = parseInt(ccNum.charAt(--len), 10);
//             sum += (bit ^= 1) ? arr[val] : val;
//         }
//
//         return sum && sum % 10 === 0;
//     };
// }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));
//
// Validator.register('password', function(value, requirement, attribute) {
//   return lowercaseTest(value) && uppercaseTest(value) && digitTest(value) && lengthTest(value);
// });
//
// Validator.register('phone', function(value, requirement, attribute) {
//   return value && /^\d{3}-\d{3}-\d{4}$/.test(value);
// });
//
// Validator.register('cc', function(value, requirement, attribute) {
//   return value && creditcardTest(value);
// });

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

// export const passwordTests = {
//   lowercaseTest,
//   uppercaseTest,
//   digitTest,
//   lengthTest,
// }
