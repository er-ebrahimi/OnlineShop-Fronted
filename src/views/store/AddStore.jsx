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

const AddStore = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed, onChangeImage } = props;
  // console.log("props",props)
  const [imageURLs, setlmageURLs] = React.useState("");
  const [images, setImages] = React.useState("");
  function onImageChangeForm(event) {
    if (event.target.files && event.target.files[0]) {
      console.log("event.target.files", event.target.files);
      setImages(event.target.files[0]);
      console.log("hello image", images)
      onChangeImage(event.target.files[0]);
    }
    console.log("image", images)
  }
  React.useEffect(() => {
    // if (images.length < 1) return;
    // const newlmageUrls = [];
    // images.forEach ( image => newlmageUrls.push ( URL.createObjectURL( image) ) ) ;
    setlmageURLs(images) ;
    // console.log("imageURLs", images)
  },[images]);
  const renderImageField = ({ input, meta, ...props }) => {
    const onChange = (event) => {
      console.log(event.target.files[0])
      onImageChangeForm(event);
    };
    const { touched, error } = meta;
    return (
      <div>
        <input
        {...input}
          id="file-input"
          type="file"
          onChange={onChange}
          style={{ display: "none" }}
        />
        <label id="file-input-label" for="file-input" className="btn btn-primary mt-3">
          Select a File
        </label>
        {images.length !== "" ? images.name : ""}
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
        name="name"
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
        name="address"
        type="address"
        label="address"
        component={renderFormField}
        placeholder="address"
        validate={[required]}
        required={true}
      />
      <Field
        name="Image"
        type="file"
        label="Image"
        component={renderImageField}
        validate={[]}
        required={true}
      />
      <div className="d-grid mt-4">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={submitting}
          // onClick={console.log("hello")}
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
)(AddStore);
