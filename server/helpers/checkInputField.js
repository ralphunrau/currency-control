const checkInputField = (user) => {

  const errors = [];

  if (user.firstName.length >= 100) {
    errors.push('First name is too long!');
  }

  if (user.firstName.length < 1) {
    errors.push('First name cannot be empty!');
  } 
  
  if (user.lastName.length > 100) {
    errors.push('Last name is too long!');
  }

  if (user.lastName.length < 1) {
    errors.push('Last name cannot be empty!');
  }

  if (user.email.length < 1) {
    errors.push('Email cannot be empty!');
  }

  if (user.email.length >= 50) {
    errors.push('Email is too long!');
  }

  if (user.password.length < 7) {
    errors.push('Password must be at least 8 characters!');
  }

  if (user.password.length >= 50) {
    errors.push('Password is too long!');
  }

  if (user.confirmPass.length < 1) {
    errors.push('Password confirmation cannot be empty!');
  }

  if (user.confirmPass.length >= 50) {
    errors.push('Password confirmation is too long!');
  }

  if (user.password !== user.confirmPass) {
    errors.push('Passwords must match!');
  }

  return errors;
}

module.exports = { checkInputField }