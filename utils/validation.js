// Check required field

export const requiredField = (value) => {

  return value.trim() !== "";

};



// Validate email

export const validateEmail = (email) => {

  const emailPattern =
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


  return emailPattern.test(email);

};



// Validate Indian mobile number

export const validatePhone = (phone) => {

  const phonePattern =
    /^[6-9]\d{9}$/;


  return phonePattern.test(phone);

};



// Validate password strength

export const validatePassword = (
  password
) => {

  return password.length >= 6;

};



// Confirm password match

export const confirmPassword = (
  password,
  confirmPassword
) => {

  return password === confirmPassword;

};



// Validate registration form

export const validateRegisterForm = (
  formData
) => {

  const errors = {};


  if (!requiredField(formData.fullName)) {

    errors.fullName =
      "Name is required.";

  }


  if (!validateEmail(formData.email)) {

    errors.email =
      "Enter a valid email.";

  }


  if (!validatePhone(formData.phone)) {

    errors.phone =
      "Enter a valid mobile number.";

  }


  if (!validatePassword(formData.password)) {

    errors.password =
      "Password must contain minimum 6 characters.";

  }


  if (
    !confirmPassword(
      formData.password,
      formData.confirmPassword
    )
  ) {

    errors.confirmPassword =
      "Passwords do not match.";

  }


  return errors;

};