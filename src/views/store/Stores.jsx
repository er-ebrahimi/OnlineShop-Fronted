import React, { lazy, Component } from "react";
import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
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
  import("../../components/card/CardStore")
);
const CardProductList = lazy(() =>
  import("../../components/card/CardProductList")
);
const AddProduct = lazy(() => import("../cart/AddProduct"));
class Stores extends Component {
  state = {
    currentProducts: [],
    currentPage: null,
    totalPages: null,
    totalItems: 0,
    view: "list",
  };
  onSubmit = async (values) => {
    console.log("value",values)
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://141.11.107.63:8080/store/create/",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(values),
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  UNSAFE_componentWillMount() {
    const totalItems = this.getProducts().length;
    this.setState({ totalItems });
  }

  onPageChanged = (page) => {
    let products = this.getProducts();
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = products.slice(offset, offset + pageLimit);
    this.setState({ currentPage, currentProducts, totalPages });
  };

  onChangeView = (view) => {
    this.setState({ view });
  };

  getProducts = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://141.11.107.63:8080/store/list/',
      withcredentials: true,
      
    };
    
    axios.request(config)
    .then((response) => {
      console.log("shop");
      
    })
    .catch((error) => {
      console.error(error);
      // alert("error");
    });
    let products = data.products;
    // products = products.concat(products);
    // products = products.concat(products);
    // products = products.concat(products);
    // products = products.concat(products);
    // products = products.concat(products);
    return products;
  };


  render() {
    return (
      <React.Fragment>
        <div
          className="p-5 bg-primary bs-cover"
          style={{
            backgroundImage: "url(../../images/banner/50-Banner.webp)",
          }}
        >
          <div className="container text-center">
            <span className="display-5 px-3 bg-white rounded shadow">
              Stores
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
                  
                   <AddProduct onSubmit={this.onSubmit} />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              {/* <div className="row">
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
              </div> */}
              <hr />
              <div className="row g-3">
                {
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-4">
                        <CardProductGrid data={product} />
                      </div>
                    );
                  })}
                {/* {this.state.view === "list" &&
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-12">
                        <CardProductList data={product} />
                      </div>
                    );
                  })} */}
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

export default Stores;
