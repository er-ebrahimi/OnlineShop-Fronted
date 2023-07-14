import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconBriefcase } from "bootstrap-icons/icons/briefcase.svg";
import { ReactComponent as IconBadgeAd } from "bootstrap-icons/icons/badge-ad.svg";
import { ReactComponent as IconGift } from "bootstrap-icons/icons/gift.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faApple,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { useInfo } from "../context/Infocontext";

const Footer = () => {
  const { info, changeInfo } = useInfo();

  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-dark">
          <div className="row ">
            <div className="col-md-9 py-3 text-white">
              Get connected with us on social networks!
            </div>
            <div className="col-md-3 py-3 text-center text-white">
              <Link to="/" title="Apple">
                <FontAwesomeIcon icon={faApple} className="text-light me-3" />
              </Link>
              <Link to="/" title="Windows">
                <FontAwesomeIcon icon={faWindows} className="text-light me-3" />
              </Link>
              <Link to="/" title="Android">
                <FontAwesomeIcon icon={faAndroid} className="text-light me-3" />
              </Link>
              |
              <Link to="/" title="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-light ms-3 me-3"
                />
              </Link>
              <Link to="/" title="Facebook">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-light me-3"
                />
              </Link>
              <Link to="/" title="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-light me-3"
                />
              </Link>
              <Link to="/" title="Youtube">
                <FontAwesomeIcon icon={faYoutube} className="text-light me-3" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-3 py-3">
              <div className="h6">Trendy Mart</div>
              <hr />
              <p>
                At TrendyMart, we believe that shopping should be a delightful
                and convenient experience. We are an online marketplace
                dedicated to providing you with an extensive range of
                high-quality products, all in one place. Our mission is to bring
                you the latest trends, unique finds, and exceptional customer
                service, ensuring your satisfaction with every purchase
              </p>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Products</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/product/categories/?type=electronic"
                    className="text-decoration-none text-white stretched-link"
                    onClick={() => {
                      changeInfo("change", !info.change);
                    }}
                  >

                    Electronics
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/product/categories/?type=mobile"
                    className="text-decoration-none text-white stretched-link nav-link"
                    onClick={() => {
                      changeInfo("change", !info.change);
                    }}
                  >
                    Mobiles
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/product/categories/?type=furniture"
                    className="text-decoration-none text-white stretched-link"
                    onClick={() => {
                      changeInfo("change", !info.change);
                    }}>
                    Furniture
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to={"/product/categories/?type=cloth"}
                    className="text-decoration-none text-white stretched-link"
                    onClick={() => {
                      changeInfo("change", !info.change);
                    }}>
                    Clothes
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                to={"/product/categories/?type=laptop"}
                className="text-decoration-none text-white stretched-link"
                    onClick={() => {
                      changeInfo("change", !info.change);
                    }}>
                    Laptop
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Policy</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/product/categories/?type=furniture"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Return Policy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Security
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Privacy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    EPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Address</div>
              <hr />
              <address>
                <strong>Twitter, Inc.</strong>
                <br />
                1355 Market St, Suite 900
                <br />
                San Francisco, CA 94103
                <br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
              <div className="h6">Customer Care</div>
              <hr />
              <IconTelephone /> +1800 100 1000
              <br />
              <IconEnvelope />
              TrendyMart@email.com
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row">
            <div className="col-md-2 py-2 bg-dark">
              <Link to="/" className="text-white text-decoration-none">
                <IconBriefcase className="text-warning" /> Partner with us
              </Link>
            </div>
            <div className="col-md-2 py-2 bg-dark">
              <Link to="/" className="text-white text-decoration-none">
                <IconBadgeAd className="text-info" /> Advertise
              </Link>
            </div>
            <div className="col-md-2 py-2 bg-dark">
              <Link to="/" className="text-white text-decoration-none">
                <IconGift className="text-white" /> Gift
              </Link>
            </div>
            <div className="col-md-3 py-2 bg-dark">
              © 2009-{new Date().getFullYear()} React-E-Commerce.com
            </div>
            <div className="col-md-3 py-2 bg-dark">
              <img
                src="../../images/payment/american_express.webp"
                width="32"
                alt="American Express"
                className="me-2"
              />
              <img
                src="../../images/payment/maestro.webp"
                width="32"
                alt="Maestro"
                className="me-2"
              />
              <img
                src="../../images/payment/netbanking.webp"
                width="32"
                alt="Net Banking"
                className="me-2"
              />
              <img
                src="../../images/payment/paypal.webp"
                width="32"
                alt="Paypal"
                className="me-2"
              />
              <img
                src="../../images/payment/rupay.webp"
                width="32"
                alt="Rupay"
                className="me-2"
              />
              <img
                src="../../images/payment/upi.webp"
                width="32"
                alt="UPI"
                className="me-2"
              />
              <img
                src="../../images/payment/visa.webp"
                width="32"
                alt="Visa"
                className="me-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
