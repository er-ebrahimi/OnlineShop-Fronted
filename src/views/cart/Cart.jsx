import React, { Component, lazy } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { apis, domain } from "../../components/API/api";
import { Add } from "../../functions/addToBasket";
const CouponApplyForm = lazy(() =>
  import("../../components/others/CouponApplyForm")
);

class CartView extends Component {
  constructor(props) {
    super();
    this.state = {
      currentProducts: [],
      total: "",
    };
  }
  quantity = (id, upDown) => {
    console.log("id", id)
    let temp = this.state.currentProducts.map((product) => {
      if (product.id === id) {
        if(upDown){
          Add(product.product.id, 1);
          return {...product, quantity: product.quantity + 1}
        }
        else{
          Add(product.product.id, -1);
          return {...product, quantity: product.quantity - 1}
        }
        
      }
      else
      return product;
    });
    console.log(temp)
    this.setState({ currentProducts: temp });
  }
  onSubmitApplyCouponCode = async (values) => {
    alert(JSON.stringify(values));
  };

  onDelete = (id,productId,qunit) => {
    let temp = this.state.currentProducts.filter((product) => {
      return product.id !== id;
    });
    this.setState({ currentProducts: temp });
    const token = JSON.parse(localStorage.getItem("authTokens")).access;
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: apis["basket"]["delete"],
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        product_id: productId,
        quantity: qunit,
      },
    };
    console.log("config", config);
    axios
      .request(config)
      .then((response) => {
        console.log("id", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onProductsChanged = (products) => {
    this.setState({
      currentProducts: products,
    });
  };

  componentDidMount() {
    const token = JSON.parse(localStorage.getItem("authTokens")).access;
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: apis["basket"]["show"],
      headers: {
        Authorization: "Bearer " + token,
        
      },
    };
    
    axios
    .request(config)
    .then((response) => {
      console.log(response.data);
      this.setState({ currentProducts: response.data.products , total: response.data.total_price})
      console.log("resoponse", this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Shopping Cart</h1>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width={120}>
                          Quantity
                        </th>
                        <th scope="col" width={150}>
                          Price
                        </th>
                        <th scope="col" className="text-end" width={130}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.currentProducts.map((product, index) => (
                          <tr key={index}>
                            <td>
                              <div className="row">
                                <div className="col-3 d-none d-md-block">
                                  <img
                                    src={domain + product.product.image}
                                    width="80"
                                    alt="..."
                                    className="img-fluid rounded "
                                  />
                                </div>
                                <div className="col">
                                  <Link
                                    to="/product/detail"
                                    className="text-decoration-none"
                                  >
                                    {product.product.name}
                                  </Link>
                                  <p className="small text-muted">
                                    {product.product.bio}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="input-group input-group-sm mw-140">
                                <button
                                  className="btn btn-primary text-white"
                                  type="button"
                                  onClick={() => this.quantity(product.id, false)}
                                >
                                  <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={product.quantity}
                                />
                                <button
                                  className="btn btn-primary text-white"
                                  type="button"
                                  onClick={() => this.quantity(product.id, true)}
                                  
                                >
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                              </div>
                            </td>
                            <td>
                              <var className="price">
                                {product.product.price}
                              </var>
                              <small className="d-block text-muted">
                              </small>
                            </td>
                            <td className="text-end">
                              {/* <button className="btn btn-sm btn-outline-secondary me-2">
                                <IconHeartFill className="i-va" />
                              </button> */}
                              <button className="btn btn-sm btn-outline-danger" onClick={() => {this.onDelete(product.id, product.product.id , product.quantity)}}>
                                <IconTrash className="i-va" />
                              </button>
                            </td>
                          </tr>
                        ))
                      }

                      {/* <tr>
                        <td>
                          <div className="row">
                            <div className="col-3 d-none d-md-block">
                              <img
                                src="../../images/products/tshirt_grey_480x400.webp"
                                width="80"
                                alt="..."
                              />
                            </div>
                            <div className="col">
                              <Link
                                to="/product/detail"
                                className="text-decoration-none"
                              >
                                Another name of some product goes just here
                              </Link>
                              <p className="small text-muted">
                                Size: XL, Color: blue, Brand: XYZ
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="input-group input-group-sm mw-140">
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="1"
                            />
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <var className="price">$237.00</var>
                          <small className="d-block text-muted">
                            $79.00 each
                          </small>
                        </td>
                        <td className="text-end">
                          <button className="btn btn-sm btn-outline-secondary me-2">
                            <IconHeartFill className="i-va" />
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <IconTrash className="i-va" />
                          </button>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer">
                  <Link to="/checkout" className="btn btn-primary float-end">
                    Make Purchase <IconChevronRight className="i-va" />
                  </Link>
                  <Link to="/" className="btn btn-secondary">
                    <IconChevronLeft className="i-va" /> Continue shopping
                  </Link>
                </div>
              </div>
              
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  {/* <CouponApplyForm onSubmit={this.onSubmitApplyCouponCode} /> */}
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <dl className="row border-bottom">
                    <dt className="col-6">Total price:</dt>
                    <dd className="col-6 text-end">{this.state.total}$</dd>
                      {console.log("this state product",this.state.total)}
                    <dt className="col-6 text-success">Discount:</dt>
                    <dd className="col-6 text-success text-end">0</dd>
                    <dt className="col-6 text-success">
                      Coupon:{" "}
                      <span className="small text-muted">EXAMPLECODE</span>{" "}
                    </dt>
                    <dd className="col-6 text-success text-end">0</dd>
                  </dl>
                  <dl className="row">
                    <dt className="col-6">Total:</dt>
                    <dd className="col-6 text-end  h5">
                      <strong>{this.state.total}$</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center">
                    <img
                      src="../../images/payment/payments.webp"
                      alt="..."
                      height={26}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light border-top p-4">
          {/* <div className="container">
            <h6>Payment and refund policy</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default CartView;
