import React from "react";

const FormInput = (props) => {
  return (
    <input
      className='form-control form-control-sm'
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      autoComplete='off'
    />
  );
};

export default FormInput;
