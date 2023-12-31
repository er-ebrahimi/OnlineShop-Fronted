import React, { useState, useContext } from "react";

const InfoContext = React.createContext();

export function useInfo() {
  return useContext(InfoContext);
}

export default function ContextInfo(props) {
  const [info, setInfo] = useState({
    change:false,
  });
  function changeInfo(name, value) {
    setInfo((info) => ({ ...info, [name]: value }));
  }
  return (
    <InfoContext.Provider value={{ info, changeInfo }}>
      {props.children}
    </InfoContext.Provider>
  );
}