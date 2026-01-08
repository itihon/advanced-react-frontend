import { Country, Currency } from "shared/const/common";

export enum ProfileValidationError {
  FIRSTNAME_VALIDATION_ERROR = 'FIRSTNAME_VALIDATION_ERROR',
  LASTNAME_VALIDATION_ERROR = 'LASTNAME_VALIDATION_ERROR',
  AGE_VALIDATION_ERROR = 'AGE_VALIDATION_ERROR',
  CITY_VALIDATION_ERROR = 'CITY_VALIDATION_ERROR',
}

export interface Profile {
  firstname: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  originalData?: Profile;
  isLoading: boolean;
  error?: string[];
  validationError?: string[];
  readonly: boolean;
}

export interface ProfileFetchError {
  generalError?: string[];
}

export interface ProfileUploadError extends ProfileFetchError {
  validationError?: string[];
}