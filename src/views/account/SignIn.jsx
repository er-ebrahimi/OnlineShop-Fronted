import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

class SignInView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
    const axios = require("axios");
    let data = JSON.stringify({
      email: "erfan.es1381@gmail.com",
      password: "erfan_password",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://141.11.107.63:8081/user/login/",
      headers: {
        "Content-Type": "application/json",
        Cookie:
          "Token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyZmFuLmVzMTM4MUBnbWFpbC5jb20ifQ.fBAmA_5LfwcMXu0ES9jjzsmP7y1Q9eHUi8tUDvqJFk4",
      },
      data: JSON.stringify(values),
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
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
