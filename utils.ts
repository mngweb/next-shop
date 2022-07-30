export const validateCreditCardDate = (value: string) => {
  if (value.length !== 5) {
    return 'Must be in MM/YY format';
  }
  const [month, year] = value.split('/');

  if (Number(month) > 12) {
    return 'Invalid month';
  }

  const actualYear = new Date().getFullYear();
  if (Number(year) > Number(actualYear.toString().substring(2)) + 5) {
    return 'Invalid year';
  }

  return true;
};
