import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 

const SignInForm = lazy(() => import("../../components/account/SignInForm"));

class SignInView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
    // const axios = require("axios");
    let data = JSON.stringify({
      email: "erfan.es1381@gmail.com",
      password: "erfan_password",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://141.11.107.63:8080/user/login/",
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
  render() {
    return (
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
            <Link to="/">
              <img
                src="../../images/banner/Dell.webp"
                alt="..."
                className="img-fluid"
              />
            </Link>
            <Link to="/">
              <img
                src="../../images/banner/Laptops.webp"
                alt="..."
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="col-md-6 p-3">
            <h4 className="text-center">Sign In</h4>
            <SignInForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInView;
