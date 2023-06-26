import { Link } from "react-router-dom";
import { apis } from "./API/api";
import { useInfo } from "../context/Infocontext";
import { change } from "redux-form";
const TopMenu = () => {
  const { info, changeInfo } = useInfo();
  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-Commerce
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle fw-bold"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                All Pages
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/account/signin">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/signup">
                    Sign Up
                  </Link>
                </li>
                {/* <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/checkout">
                    Checkout Page
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    Contact Us
                  </Link>
                </li> */}
                
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/fsafasf">
                    404 Page Not Found
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/500">
                    500 Internal Server Error
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/product/categories/?type=laptop"}
                onClick={() => {
                  changeInfo("change", !info.change);
                  // console.log(info.change)
                }}
              >
                Laptop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/product/categories/?type=cloth"}
                onClick={() => {
                  changeInfo("change", !info.change);
                  // console.log(info.change)
                }}
              >
                Cloth
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/product/categories/?type=mobile"
                onClick={() => {
                  changeInfo("change", !info.change);
                  // console.log(info.change)
                }}
              >
                Mobile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/product/categories/?type=electronic"
                onClick={() => {
                  changeInfo("change", !info.change);
                  // console.log(info.change)
                }}
              >
                Electronic
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/product/categories/?type=furniture"
                onClick={() => {
                  changeInfo("change", !info.change);
                  // console.log(info.change)
                }}
              >
                Furniture
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/product/categories/?type=other"
                onClick={() => {
                  changeInfo("change", !info.change);
                  // console.log(info.change)
                }}
              >
                Other
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
