import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [formInfo, setFormInfo] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log(formInfo)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(formInfo));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setFormInfo(formInfo => ({ ...formInfo, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    formInfo,
    errors,
  }
};

export default useForm;