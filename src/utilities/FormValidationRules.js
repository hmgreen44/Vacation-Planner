export default function validate(formInfo) {
    let errors = {};
    if (!formInfo.name) {
      errors.name = 'Name is required';
    }
    if (!formInfo.email) {
        errors.email = 'Email Address is required';
      }
    if (!formInfo.password) {
      errors.password = 'Password is required';
    } else if (formInfo.password.length < 8) {
      errors.password = 'Password must be between 8 and 20 characters';
    }
    return errors;
  };