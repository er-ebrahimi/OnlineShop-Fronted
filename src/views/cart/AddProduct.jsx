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
  const { handleSubmit, submitting, onSubmit, submitFailed, onChangeImage } = props;
  // //console.log("props",props)
  const [imageURLs, setlmageURLs] = React.useState("");
  const [images, setImages] = React.useState("");
  function onImageChangeForm(event) {
    if (event.target.files && event.target.files[0]) {
      // //console.log("event.target.files", event.target.files);
      setImages(event.target.files[0]);
      // //console.log("hello image", images)
      onChangeImage(event.target.files[0]);
    }
    // //console.log("image", images)
  }
  React.useEffect(() => {
    // if (images.length < 1) return;
    // const newlmageUrls = [];
    // images.forEach ( image => newlmageUrls.push ( URL.createObjectURL( image) ) ) ;
    setlmageURLs(images) ;
    // //console.log("imageURLs", images)
  },[images]);
  const renderImageField = ({ input, meta, ...props }) => {
    const onChange = (event) => {
      // //console.log(event.target.files[0])
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
        name="bio"
        type="bio"
        label="bio"
        component={renderFormField}
        placeholder="bio"
        validate={[required]}
        required={true}
      />
      <Field
        name="amount"
        type="number"
        label="amount"
        component={renderFormField}
        placeholder="amount"
        validate={[required, digit]}
        required={true}
      />
      <Field
        name="price"
        type="number"
        label="price"
        component={renderFormField}
        placeholder="price"
        validate={[required, digit]}
        required={true}
      />
      <select className="btn  mt-4 border text-center" onChange={props.handleSelectChange}
      >
        <option value="other" className="text-center">Other</option>
        <option value="mobile">Mobile</option>
        <option value="laptop">Laptop</option>
        <option value="electronic">Electronic</option>
        <option value="furniture">Furniture</option>
        <option value="cloth">Cloth</option>
      </select>
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
          // onClick={//console.log("hello")}
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
