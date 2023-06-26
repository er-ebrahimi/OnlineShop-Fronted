import React from "react";
import { Link } from "react-router-dom";
import { apis } from "../API/api";

const CardIcon = (props) => {
  return (
    <div to={props.to} className="text-decoration-none ">
      <div className="card text-center" style={{ height: "35vh", maxHeight: "", maxWidth:"350px" }}>
        <div className="card-body d-flex flex-column justify-content-between shadow">
          <div className="m-3">{props.children}</div>
          <div className="">
            <h2 className="card-title text-capitalize">{props.title}</h2>
            <div className="card-text text-success">{props.text}</div>
            <small className="text-muted">{props.tips}</small>
          </div>
          <Link
          className="btn btn-primary"
          to={"/product/show/" + props.id}

          >
           Go
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardIcon;
