import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { apis } from "../API/api";
import { Add } from "../../functions/addToBasket";
import { domain } from "../API/api";
const CardMyProductGrid = (props) => {
    const onProductsDeleted = props.onProductsDeleted;

    const deleteProduct = async (values) => {
        const tokenJson = localStorage.getItem("authTokens");
        const tokenClass = JSON.parse(tokenJson);
        const token = tokenClass.access;
        // //console.log("token", token);
    
        let config = {
          method: "delete", // changed from get to post
          maxContentLength: Infinity, // changed from maxBodyLength to maxContentLength
          url: apis["product"]["delete"]+values.id+"/",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data", // added content type header
          },
        };
    
        axios
          .request(config)
          .then((response) => {
            onProductsDeleted(product.id);
    
          })
          .catch((error) => {
            //console.log(error);
          });
      };  
  const product = props.data;
  return (
    <div className="card">
      {/* {//console.log("product", product)} */}
      <img src={domain + product.image} className="card-img-top" alt="..." />
      {product.isNew && (
        <span className="badge bg-success position-absolute mt-2 ms-2">
          New
        </span>
      )}
      {product.isHot && (
        <span className="badge bg-danger position-absolute r-0 mt-2 me-2">
          Hot
        </span>
      )}
      {(product.bio > 0 || product.discountPrice > 0) && (
        <span
          className={`rounded position-absolute p-2 bg-warning  ms-2 small ${
            product.isNew ? "mt-5" : "mt-2"
          }`}
        >
          -
          {product.bio > 0
            ? product.bio + "%"
            : "$" + product.discountPrice}
        </span>
      )}
      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          <Link to={product.id} className="text-decoration-none">
            {product.name}
          </Link>
        </h6>
        <div className="my-2">
          <span className="fw-bold h5">${product.price}</span>
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
          <button
            type="button"
            className="btn btn-sm btn-primary"
            title="Add to cart"
            onClick={()=>(Add(product.id, 1))}
            
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger"
            title="Add to wishlist"
            onClick={()=>(deleteProduct(product))}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMyProductGrid;
