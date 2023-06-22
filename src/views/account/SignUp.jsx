import React, { lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import {apis} from "../../components/API/api";
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

function SignUpView() {
  const Navigate = useNavigate();
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  const onSubmit = async (values) => {
    console.log("sgin in");
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: apis["signup"],
      withcredentials: true,
      
      data : JSON.stringify(values)
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      console.log("login");
      Navigate("/account/signin");
      
    })
    .catch((error) => {
      console.error(error);
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
          <h4 className="text-center">Sign Up</h4>
          <SingUpForm onSubmit={onSubmit} />
        </div>
        {/* <div>
          hello
        </div> */}
      </div>
    </div>
  );
}

export default SignUpView;
