import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apis } from "../components/API/api";
import React from "react";
import { useInfo } from "../context/Infocontext";
export const categoryFunc = (Component) => {
  return (props) => {
    const location = useLocation();
    // console.log("location", location);
    const queryParams = new URLSearchParams(location.search);
    const [searchQuery, setSearchQuery1] = React.useState( queryParams.get("type"));
    const [change, setChanger] = React.useState(false)
    // console.log("searchQuery", searchQuery);
    const [products, setProducts] = useState([]);
    const { info, changeInfo } = useInfo();
    useEffect(() => {
      console.log("fetch data");
      fetchData(searchQuery);
    }, [searchQuery,change,info]);
    function setSearchQuery(props){
      setSearchQuery1(props);
      console.log("searchQuery in func", searchQuery);
    }


    // useEffect(() => {
    //   console.log("location", location);

    const fetchData = async (query) => {
      const tokenJson = localStorage.getItem("authTokens");
      const tokenClass = JSON.parse(tokenJson);
      const token = tokenClass.access;
      // console.log("request sent");

      let config = {
        method: "get", // changed from get to post
        maxContentLength: Infinity, // changed from maxBodyLength to maxContentLength
        url: apis["product"]["categories"]+location.search,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data", // added content type header
        },
        
      };
      
      axios
      .request(config)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };
      
    return <Component products = {products} setSearchQuery={setSearchQuery} setChanger={setChanger} change = {change} {...props} />;
  };
};
