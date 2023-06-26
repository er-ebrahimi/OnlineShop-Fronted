import axios from "axios";
import React from "react";
import { apis } from "../components/API/api";

export const likeProduct = (id) => {
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.access;
  // //console.log("token", token);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: apis["rateproduct"] + id + "/",
    headers: {
      Authorization: "Bearer " + token,
    },
    
  };
  //console.log("config", config);
  axios
    .request(config)
    .then((response) => {
      // //console.log("id", response);
    })
    .catch((error) => {
      //console.log(error);
    });
};
