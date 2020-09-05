export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const requiredField = value => {
    if (value) return undefined;

    return 'Field is reuired'; 
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;

    return undefined; 
}

export const voidCheck = (value) => {
  if (!value || value.trim().length <= 0) return `You can't send an empty line.`;

  return undefined; 
}