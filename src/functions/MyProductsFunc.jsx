import React from "react";
import { useParams } from "react-router-dom";
export const withHooksHOC = (Component) => {
  return (props) => {
    const param = useParams()

    return <Component param={param} {...props} />;
  };
};