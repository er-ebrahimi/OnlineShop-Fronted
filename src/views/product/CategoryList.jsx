import React, { lazy, Component } from "react";
import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { categoryFunc} from "../../functions/CategoryFunc.jsx";
import { apis } from "../../components/API/api";
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

class ProductListView extends Component {
  state = {
    currentProducts: [],
    currentPage: null,
    totalPages: null,
    totalItems: 0,
    view: "list",
    image: "",
    imageURLs: "",
  };
  

  UNSAFE_componentWillMount() {
    const totalItems = this.getProducts().length;
    this.setState({ totalItems });
  }

  onProductsChanged = (currentProducts) => {
    // //console.log("currentProducts1", currentProducts);
    this.setState({
      currentProducts: [...this.state.currentProducts,currentProducts]
       });
    // //console.log("currentProducts2", currentProducts);
  };

  onPageChanged = async (page) =>  {
    let products = this.getProducts();
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: apis["product"]["list"],  
      headers: {
      },
    };

    axios
      .request(config)
      .then((response) => {
        products = response.data;
        // //console.log("stores",response.data);
        const { currentPage, totalPages, pageLimit } = page;
        const offset = (currentPage - 1) * pageLimit;
        const currentProducts = products.slice(offset, offset + pageLimit);
        // //console.log("currentProducts", currentProducts);
        this.setState({ currentPage, currentProducts, totalPages });
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  onChangeView = (view) => {
    this.setState({ view });
  };

  onChangeImage = (image) => {
    this.setState({ image });
    //console.log("change image", image);
  };
  
  getProducts = () => {
    let products = data.products;
    // //console.log("token", token);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      // url: apis["product"]["list"]+ this.props.param.id + '/',
      url: apis["product"]["list"],  
      headers: {
        // Authorization: "Bearer " + token,
      },
    };

    axios
      .request(config)
      .then((response) => {
        products = response.data;
        // //console.log("stores",response.data);
        // const { currentPage, totalPages, pageLimit } = page;
        // const offset = (currentPage - 1) * pageLimit;
        // const currentProducts = products.slice(offset, offset + pageLimit);
        // //console.log("currentProducts", currentProducts);
        // this.setState({ currentPage, currentProducts, totalPages });
        //console.log(products)
        products = products.data;
      })
      .catch((error) => {
        //console.log(error);
      });
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
      {/* {//console.log(this.props.products)} */}
        <div
          className="p-5 bg-primary bs-cover"
          style={{
            backgroundImage: "url(../../images/banner/50-Banner.webp)",
          }}
        >
          <div className="container text-center">
            <span className="display-5 px-3 bg-white rounded shadow">
              Products
            </span>
          </div>
        </div>
        <Breadcrumb />
        <div className="container-fluid mb-3">
          <div className="row">
            <div className="col-md-3">
              <FilterPrice setSearchQuery={this.props.setSearchQuery} setChanger={this.props.setChanger} change = {this.props.change}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-7">
                  <span className="align-middle fw-bold">
                    {/* {this.state.totalItems} results for{" "} */}
                    {/* <span className="text-warning">"t-shirts"</span> */}
                  </span>
                </div>
                <div className="col-5 d-flex justify-content-end">
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
              <h3>{this.props.products.length === 0 ? "empty" : ""}</h3>
              <div className="row g-3">
                {this.state.view === "grid" &&
                  this.props.products.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-4">
                        <CardProductGrid data={product} />
                      </div>
                    );
                  })}
                {this.state.view === "list" &&
                  this.props.products.map((product, idx) => {
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

export default categoryFunc(ProductListView);
