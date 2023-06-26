import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { apis } from "../API/api";
import axios from "axios";
import { Add } from "../../functions/addToBasket";
const CardMyProductList = (props) => {
  const onProductsDeleted = props.onProductsDeleted;

  const deleteProduct = async (values) => {
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.access;
    // console.log("token", token);

    let config = {
      method: "delete", // changed from get to post
      maxContentLength: Infinity, // changed from maxBodyLength to maxContentLength
      url: apis["product"]["delete"] + values.id + "/",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data", // added content type header
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("id", product.id);
        onProductsDeleted(product.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const product = props.data;
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-3 text-center">
          <img src={product.image} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h6 className="card-subtitle me-2 d-inline">
              <Link
                to={apis["product"]["product"] + product.id}
                className="text-decoration-none"
              >
                {product.name}
              </Link>
            </h6>
            {product.isNew && (
              <span className="badge bg-success me-2">New</span>
            )}
            {product.isHot && <span className="badge bg-danger me-2">Hot</span>}

            <div>
              {product.star > 0 &&
                Array.from({ length: 5 }, (_, key) => {
                  if (key <= product.star)
                    return (
                      <IconStarFill className="text-warning me-1" key={key} />
                    );
                  else
                    return (
                      <IconStarFill className="text-secondary me-1" key={key} />
                    );
                })}
            </div>
            {product.bio && product.bio.includes("|") === false && (
              <p className="small mt-2">{product.bio}</p>
            )}
            {product.bio && product.bio.includes("|") && (
              <ul className="mt-2">
                {product.bio.split("|").map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <div className="mb-2">
              <span className="fw-bold h5">${product.price}</span>
              {product.originPrice > 0 && (
                <del className="small text-muted ms-2">
                  ${product.originPrice}
                </del>
              )}
              {(product.bio > 0 || product.discountPrice > 0) && (
                <span className={`rounded p-1 bg-warning ms-2 small`}>
                  -
                  {product.bio > 0
                    ? product.bio + "%"
                    : "$" + product.discountPrice}
                </span>
              )}
            </div>
            {product.isFreeShipping && (
              <p className="text-success small mb-2">
                <IconTruckFill /> Free shipping
              </p>
            )}

            <div className="btn-group d-flex" role="group">
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
      </div>
    </div>
  );
};

export default CardMyProductList;
