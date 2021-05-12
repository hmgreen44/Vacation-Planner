export default function validate(formInfo, page) {
    let errors = {};
    if (!formInfo.name && page != 'login') {
      errors.name = 'Name is required';
    }
    if (!formInfo.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formInfo.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formInfo.password) {
      errors.password = 'Password is required';
    } else if (formInfo.password.length < 8) {
      errors.password = 'Password must be between 8 and 20 characters';
    }
    return errors;
  };