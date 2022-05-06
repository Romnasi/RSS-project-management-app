import React from 'react';
import { useFormik } from 'formik';
import Input from '../input/Input';
import { formProps } from '../../models/form';

export default function Form({
  schema,
  initialValues,
  fields,
  isHaveButton,
  formId,
  onSubmit,
}: formProps) {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit,
  });

  type fieldName = keyof typeof schema;

  return (
    <form onSubmit={handleSubmit} id={formId}>
      {fields.map((field, id) => (
        <Input
          key={id}
          onChange={handleChange}
          value={values[field.name as fieldName]}
          isHaveError={!!errors[field.name as fieldName]}
          {...field}
        />
      ))}

      {isHaveButton && <button type="submit">Submit</button>}
    </form>
  );
}
