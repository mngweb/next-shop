export const RegExpressions = {
  EXPIRATION_DATE: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
  CVC: /([0-9]{2})\/([0-9]{2})/,
  POSTAL_CODE: /^[0-9]{2}-[0-9]{3}/,
};

export const InvalidMessages_EN = {
  CVC: 'CVC is invalid',
  EMAIL: 'Email is invalid',
  EXPIRATION_DATE: 'Expiration date is invalid',
  LENGTH: 'It must have ${length} length',
  POSTAL_CODE: 'Postal code is invalid',
  REQUIRED: 'This field is required',
};

export const InvalidMessages_PL = {
  CVC: 'CVC jest nieprawidłowe',
  EMAIL: 'Email jest nieprawidłowy',
  EXPIRATION_DATE: 'Data ważności jest nieprawidłowa',
  LENGTH: 'Wymagane jest ${length} znaków',
  POSTAL_CODE: 'Kod pocztowy jest nieprawidłowy',
  REQUIRED: 'To pole jest wymagane',
};

export const InvalidMessages = InvalidMessages_EN;

// export const validateCreditCardDate = (value: string) => {
//   if (value.length !== 5) {
//     return 'Must be in MM/YY format';
//   }
//   const [month, year] = value.split('/');

//   if (Number(month) > 12) {
//     return 'Invalid month';
//   }

//   const actualYear = new Date().getFullYear();
//   if (Number(year) > Number(actualYear.toString().substring(2)) + 5) {
//     return 'Invalid year';
//   }

//   return true;
// };
