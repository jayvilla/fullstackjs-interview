export type SignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
};

export type SignUpFormErrors = {
  firstName: SignUpFormFieldError;
  lastName: SignUpFormFieldError;
  email: SignUpFormFieldError;
  password: SignUpFormFieldError;
  confirmPassword: SignUpFormFieldError;
  phoneNumber: SignUpFormFieldError;
};

export type SignUpFormFieldError = {
  error: boolean;
  message: string;
};

export type ErrorMessages = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
};

export type User = {
  createdAt: string;
  email: string;
  id: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  updatedAt: string;
};

export type LoginParams = {
  email: string;
  password: string;
};

export type FormMessage = {
  error: boolean;
  message: string;
};
