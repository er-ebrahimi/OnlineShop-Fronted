import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  email
} from "../../helpers/validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import renderFormField from "../../helpers/renderFormField";

const AddProduct = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  const [imageURLs, setlmageURLs] = React.useState([]);
  const [images, setInages] = React.useState([]);
  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setInages([...images, event.target.files[0]]);
    }
    console.log("image", images)
  }
  React.useEffect(() => {
    if (images.length < 1) return;
    const newlmageUrls = [];
    images.forEach ( image => newlmageUrls.push ( URL.createObjectURL( image) ) ) ;
    setlmageURLs(newlmageUrls) ;
  },[images]);
  const renderImageField = ({ input, meta, ...props }) => {
    const { touched, error } = meta;
    return (
      <div>
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
        {touched && error && <span>{error}</span>}
        {/* {imageURLs.map(imageSrc => <img src={imageSrc}/>)} */}
        {/* {getImageListItemBarUtilityClass.map(imageSrc => (<img src=""/>))} */}
      </div>
    );
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <Field
        name="Name"
        type="Name"
        label="Name"
        component={renderFormField}
        placeholder="Name"
        validate={[required]}
        required={true}
      />
      <Field
        name="Info"
        type="Info"
        label="Info"
        component={renderFormField}
        placeholder="Info"
        validate={[required]}
        required={true}
      />
      <Field
        name="Image"
        type="file"
        label="Image"
        component={renderImageField}
        validate={[required]}
        required={true}
      />
      <div className="d-grid mt-4">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={submitting}
        >
          Create
        </button>
      </div>

    </form>
  );
};

export default compose(
  reduxForm({
    form: "signin",
  })
)(AddProduct);
