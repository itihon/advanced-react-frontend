import { Profile, ProfileValidationError } from '../../types/profile';

type Validator = (value: string | number) => boolean

const lettersRegEx = /^[A-Za-z]*$/;

const validateProfileFirstname: Validator = (value) => {
  // letters
  // min length 1
  // max length 64

  const strValue = value.toString();
  const isLetters = lettersRegEx.test(strValue);
  const hasMinLength = strValue.length > 1;
  const hasMaxLength = strValue.length <= 64;

  return isLetters && hasMinLength && hasMaxLength;
}

const validateProfileLastname = validateProfileFirstname;

const validateProfileAge: Validator = (value) => {
  // integer
  // min 18
  // max 128

  const numValue = Number(value);
  const isInteger = Number.isInteger(numValue);
  const hasMinLength = Number(numValue) > 1;
  const hasMaxLength = Number(numValue) <= 64;

  return isInteger && hasMinLength && hasMaxLength;
}

const validateProfileCity: Validator = (value) => {
  // letters
  // min length 1
  // max length 64

  const strValue = value.toString();
  const isLetters = lettersRegEx.test(strValue);
  const hasMinLength = strValue.length > 3;
  const hasMaxLength = strValue.length <= 64;

  return isLetters && hasMinLength && hasMaxLength;
}

function validateProfileData(profileData: Profile): ProfileValidationError[] {
  const errors: ProfileValidationError[] = [];
  const { firstname, lastname, age, city } = profileData;

  if (!validateProfileFirstname(firstname)) {
    errors.push(ProfileValidationError.FIRSTNAME_VALIDATION_ERROR);
  }

  if (!validateProfileLastname(lastname)) {
    errors.push(ProfileValidationError.LASTNAME_VALIDATION_ERROR);
  }

  if (!validateProfileAge(age)) {
    errors.push(ProfileValidationError.AGE_VALIDATION_ERROR);
  }

  if (!validateProfileCity(city)) {
    errors.push(ProfileValidationError.CITY_VALIDATION_ERROR);
  }

  return errors;
};

export default validateProfileData;