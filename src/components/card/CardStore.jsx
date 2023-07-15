import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { apis } from "../API/api";
const CardStore = (props) => {
  const product = props.data;
  const onProductsDeleted = props.onProductsDeleted;
  const deleteStore = async (values) => {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.access;
    // //console.log("token", token);

    let config = {
      method: "delete", // changed from get to post
      maxContentLength: Infinity, // changed from maxBodyLength to maxContentLength
      url: apis["store"]["delete"]+values.id+"/",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data", // added content type header
      },
    };

    axios
      .request(config)
      .then((response) => {
        //console.log("id",product.id);
        onProductsDeleted(product.id);

      })
      .catch((error) => {
        //console.log(error);
      });
  };
  return (
    <div className="card">
      <div style={{height:"8rem"}} className="d-flex justify-content-center">
      <img  src={product.image} className="card-img-top m-auto" style={{height:"100%", width:"11.5rem"}} alt="..." />

      </div>
      {/* {product.isNew && (
        <span className="badge bg-success position-absolute mt-2 ms-2">
          New
        </span>
      )} */}
      {/* {product.isHot && (
        <span className="badge bg-danger position-absolute r-0 mt-2 me-2">
          Hot
        </span>
      )}
      {(product.discountPercentage > 0 || product.discountPrice > 0) && (
        <span
          className={`rounded position-absolute p-2 bg-warning  ms-2 small ${
            product.isNew ? "mt-5" : "mt-2"
          }`}
        >
          -
          {product.discountPercentage > 0
            ? product.discountPercentage + "%"
            : "$" + product.discountPrice}
        </span>
      )} */}
      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          <h2  className="text-decoration-none fw-bold">
            {product.name}
          </h2>
        </h6>
        <div className="my-2">
          <span className=" h5">{product.bio.length > 150 ? product.bio.slice(0,150): product.bio}</span>
          {product.originPrice > 0 && (
            <del className="small text-muted ms-2">${product.originPrice}</del>
          )}
          <span className="ms-2">
            {Array.from({ length: product.star }, (_, key) => (
              <IconStarFill className="text-warning me-1" key={key} />
            ))}
          </span>
        </div>
        <div className="btn-group  d-flex" role="group">
          <Link
            to={"/myproducts/" + product.id}
            className="btn btn-sm btn-primary"
          >
            Add 
          </Link>
        <button className="btn btn-danger btn-sm" onClick={()=>{deleteStore(product)}}>delete</button>
          
        </div>
      </div>
    </div>
  );
};

export default CardStore;
