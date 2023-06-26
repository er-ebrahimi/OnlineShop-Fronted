import axios from "axios";
import React from "react";
import { apis } from "../components/API/api";

export const Add = (id, qunit) => {
  console.log("add function ran");

  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.access;
  // console.log("token", token);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: apis["basket"]["update"],
    headers: {
      Authorization: "Bearer " + token,
    },
    data: {
      product_id: id,
      quantity: qunit,
    },
  };
  console.log("config", config);
  axios
    .request(config)
    .then((response) => {
      console.log("id", response);
    })
    .catch((error) => {
      console.log(error);
    });
};
