import React, { lazy, Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import { apis } from "../../components/API/api";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

function SignIn() {
  const Navigate = useNavigate();

  const onSubmit = async (values) => {
    let data = JSON.stringify({
      email: "erfan.es1381@gmail.com",
      password: "erfan_password",
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: apis["signin"],
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      //console.log("login sucessfully",response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      Navigate("/");

    })
    .catch((error) => {
      //console.log(error);
      alert("error");
    });
  };

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
          <SignInForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

class SignInView extends Component {
  render() {
    return <SignIn />;
  }
}

export default SignInView;
