import React from "react";
const renderFormField = (props) => {
  const {
    input,
    tips,
    label,
    required,
    meta: { touched, error, warning },
    type,
    value,
    meta,
  } = props;
  if (type === "radio") {
    return (
      <div className="form-check form-check-inline">
        <input
          {...input}
          className={`form-check-input ${meta.touched && meta.error ? 'is-invalid' : ''}`}
          id={input.name + value}
          type="radio"
          value={value}
          checked={input.value === value}
        />
        <label
          className="form-check-label"
          htmlFor={input.name + value}
        >
          {label}
        </label>
      </div>
    );
  }
  else
  
  return (
    <React.Fragment>
      {label && (
        <label
          className={`form-label ${required ? "required" : ""}`}
          htmlFor={input.name}
        >
          {label}
        </label>
      )}
      <input {...input} {...props} id={input.name} className="form-control" />
      {tips && <div className="form-text">{tips}</div>}
      {touched &&
        ((error && <div className="invalid-feedback">{error}</div>) ||
          (warning && <span>{warning}</span>))}
    </React.Fragment>
  );
};
export default renderFormField;
