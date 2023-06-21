// import { faTwitter, faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { required, maxLength20, minLength8, maxLengthMobileNo, minLengthMobileNo, digit, name, email, maxLength1000 } from "../../helpers/validation";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormField from "../../helpers/renderFormField";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";

const SignUpForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="row mb-3">
        <div className="col-md-6">
          <Field
            name="first_name"
            type="text"
            label="First Name"
            component={renderFormField}
            placeholder="First Name"
            validate={[required, name]}
            required={true}
          />
        </div>
        <div className="col-md-6">
          <Field
            name="last_name"
            type="text"
            label="Last Name"
            component={renderFormField}
            placeholder="Last Name"
            validate={[required, name]}
            required={true}
          />
        </div>
      </div>

      <Field
        name="email"
        type="email"
        label="Email"
        component={renderFormField}
        placeholder="Email"
        validate={[required, email]}
        required={true}
      />

      <Field
        name="password"
        type="password"
        label="Your password"
        component={renderFormField}
        placeholder="******"
        icon={IconShieldLock}
        validate={[required, maxLength20, minLength8]}
        required={true}
        maxLength="20"
        minLength="8"
        className="mb-3"
      />

      <Field
        name="username"
        type="text"
        label="Username"
        component={renderFormField}
        placeholder="Username"
        validate={[required, maxLength20]}
        required={true}
      />

      <Field
        name="birthday"
        type="date"
        label="Birthday"
        component={renderFormField}
        validate={[required]}
        required={true}
      />

      <Field
        name="gender"
        type="gender"
        label="Gender"
        component={renderFormField}
        validate={[required]}
        required={true}
      />

      

      <Field
        name="bio"
        type="textarea"
        label="Bio"
        component={renderFormField}
        placeholder="Tell us a little about yourself"
        validate={[required, maxLength1000]}
        required={true}
        rows="3"
      />

      <div className="d-grid mt-3">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={submitting}
        >
          Create
        </button>
      </div>
      <Link className="float-start" to="/account/signin" title="Sign In">
        Sing In
      </Link>
      <Link
        className="float-end"
        to="/account/forgotpassword"
        title="Forgot Password"
      >
        Forgot password?
      </Link>
      <div className="clearfix"></div>
      <hr></hr>
      <div className="row">
        <div className="col- text-center">
          <p className="text-muted small">Or you can join with</p>
        </div>
        <div className="col- text-center">
          <Link to="/" className="btn btn-light text-white bg-twitter me-3">
            {/* <FontAwesomeIcon icon={faTwitter} /> */}
          </Link>
          <Link to="/" className="btn btn-light text-white me-3 bg-facebook">
            {/* <FontAwesomeIcon icon={faFacebookF} className="mx-1" /> */}
          </Link>
          <Link to="/" className="btn btn-light text-white me-3 bg-google">
            {/* <FontAwesomeIcon icon={faGoogle} className="mx-1" /> */}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "signup",
  })
)(SignUpForm);
