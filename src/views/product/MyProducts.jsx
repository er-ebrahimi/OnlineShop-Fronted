import React, { lazy, Component } from "react";
import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { apis } from "../../components/API/api";
import { withHooksHOC } from "../../functions/MyProductsFunc";
// import Addproduct from "../cart/Addproduct";
// import SignUpForm from "../../components/account/SignUpForm";
const Paging = lazy(() => import("../../components/Paging"));
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const FilterCategory = lazy(() => import("../../components/filter/Category"));
const FilterPrice = lazy(() => import("../../components/filter/Price"));
const FilterSize = lazy(() => import("../../components/filter/Size"));
const FilterStar = lazy(() => import("../../components/filter/Star"));
const FilterColor = lazy(() => import("../../components/filter/Color"));
const FilterTag = lazy(() => import("../../components/filter/Tag"));
const FilterClear = lazy(() => import("../../components/filter/Clear"));
const CardServices = lazy(() => import("../../components/card/CardServices"));
const CardProductGrid = lazy(() =>
  import("../../components/card/CardProductGrid")
);
const CardProductList = lazy(() =>
  import("../../components/card/CardProductList")
);
// const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));
const AddProduct = lazy(() => import("../cart/AddProduct"));

class MyProducts extends Component {
  state = {
    currentProducts: [],
    currentPage: null,
    totalPages: null,
    totalItems: 0,
    view: "list",
    image: "",
    imageURLs: "",
  };
  onSubmit = async (values) => {
    console.log("image", this.state.image);
    console.log("image type", typeof this.state.image);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("bio", values.bio);
    formData.append("address", values.type);
    formData.append("price", values.price);
    formData.append("amount", values.amount);
    formData.append("image", this.state.image);
    console.log("formData", formData);
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.access;
    // console.log("token", token);

    let config = {
      method: "post", // changed from get to post
      maxContentLength: Infinity, // changed from maxBodyLength to maxContentLength
      url: apis["product"]["create"] + this.props.param.id + '/',
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data", // added content type header
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        this.onProductsChanged(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  UNSAFE_componentWillMount() {
    const totalItems = this.getProducts().length;
    this.setState({ totalItems });
  }

  onProductsChanged = (currentProducts) => {
    console.log("currentProducts1", currentProducts);
    this.setState({
      currentProducts: [...this.state.currentProducts,currentProducts]
       });
    console.log("currentProducts2", currentProducts);
  };

  onPageChanged = async (page) =>  {
    let products = this.getProducts();
    // console.log("products", products)
    // console.log("page", page)
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.access;
    // console.log("token", token);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      // url: apis["product"]["list"]+ this.props.param.id + '/',
      url: apis["product"]["list"],  
      headers: {
        Authorization: "Bearer " + token,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        products = response.data;
        // console.log("stores",response.data);
        const { currentPage, totalPages, pageLimit } = page;
        const offset = (currentPage - 1) * pageLimit;
        const currentProducts = products.slice(offset, offset + pageLimit);
        // console.log("currentProducts", currentProducts);
        this.setState({ currentPage, currentProducts, totalPages });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChangeView = (view) => {
    this.setState({ view });
  };

  onChangeImage = (image) => {
    this.setState({ image });
    console.log("change image", image);
  };
  
  getProducts = () => {
    let products = data.products;
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.access;
    // console.log("token", token);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: apis["store"]["list"],
      headers: {
        Authorization: "Bearer " + token,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        products = JSON.stringify(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products);
    return products;
  };



  render() {
    return (
      <React.Fragment>
        {console.log("param" , this.props.param)}
        <div
          className="p-5 bg-primary bs-cover"
          style={{
            backgroundImage: "url(../../images/banner/50-Banner.webp)",
          }}
        >
          <div className="container text-center">
            <span className="display-5 px-3 bg-white rounded shadow">
              Your Products
            </span>
          </div>
        </div>
        <Breadcrumb />
        <div className="container-fluid mb-3">
          <div className="row">
            <div className="col-md-3">
              <div className="card mb-3">
                <div className="card-header">
                  <span className="align-middle">Add card</span>
                  
                   <AddProduct onChangeImage={this.onChangeImage} onSubmit={this.onSubmit} />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-7">
                  <span className="align-middle fw-bold">
                    {this.state.totalItems} results for{" "}
                    <span className="text-warning">"t-shirts"</span>
                  </span>
                </div>
                <div className="col-5 d-flex justify-content-end">
                  <select
                    className="form-select mw-180 float-start"
                    aria-label="Default select"
                  >
                    <option value={1}>Most Popular</option>
                    <option value={2}>Latest items</option>
                    <option value={3}>Trending</option>
                    <option value={4}>Price low to high</option>
                    <option value={4}>Price high to low</option>
                  </select>
                  <div className="btn-group ms-3" role="group">
                    <button
                      aria-label="Grid"
                      type="button"
                      onClick={() => this.onChangeView("grid")}
                      className={`btn ${
                        this.state.view === "grid"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                    >
                      <FontAwesomeIcon icon={faTh} />
                    </button>
                    <button
                      aria-label="List"
                      type="button"
                      onClick={() => this.onChangeView("list")}
                      className={`btn ${
                        this.state.view === "list"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                    >
                      <FontAwesomeIcon icon={faBars} />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row g-3">
                {this.state.view === "grid" &&
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-4">
                        <CardProductGrid data={product} />
                      </div>
                    );
                  })}
                {this.state.view === "list" &&
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-12">
                        <CardProductList data={product} />
                      </div>
                    );
                  })}
              </div>
              <hr />
              <Paging
                totalRecords={this.state.totalItems}
                pageLimit={9}
                pageNeighbours={3}
                onPageChanged={this.onPageChanged}
                sizing=""
                alignment="justify-content-center"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withHooksHOC(MyProducts);
