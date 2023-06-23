import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apis } from "../components/API/api";
export const searchFunction = (Component) => {
  return (props) => {
    const location = useLocation();
    // console.log("location", location);
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search");
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchData(searchQuery);
    }, [searchQuery]);

    // useEffect(() => {
    //   console.log("location", location);

    const fetchData = async (query) => {
      const tokenJson = localStorage.getItem("authTokens");
      const tokenClass = JSON.parse(tokenJson);
      const token = tokenClass.access;
      // console.log("token", token);

      let config = {
        method: "get", // changed from get to post
        maxContentLength: Infinity, // changed from maxBodyLength to maxContentLength
        url: apis["product"]["search"]+query,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data", // added content type header
        },
        
      };
      
      axios
      .request(config)
      .then((response) => {
        console.log("search result",response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };
      
    return <Component products = {products} {...props} />;
  };
};
