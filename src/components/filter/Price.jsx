import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { number } from "../../helpers/validation";
import { categoryFunc } from "../../functions/CategoryFunc";
import { useLocation } from "react-router-dom";

const FilterPrice = (props) => {
  const navigate = useNavigate();
  let numbers = [10, 20, 30, 40];
  const [price, setPrice] = useState([10000, 0]);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  // const queryParams = new URLSearchParams(location.search);
  // props.searchQuery = queryParams.get("type");
  const location = useLocation();
  useEffect(() => {
    choosePrice();
  }, [checked1, checked2, checked3]);
  useEffect(() => {
    // choosePrice()
    // console.log("price", price);
    navigate(
      `/product/category?type=other&lower_price=${price[0]}&upper_price=${price[1]}`
    );
    const queryParams = new URLSearchParams(location.search);
    props.setSearchQuery(queryParams.get("type"));
    // console.log("searchQuery", props.setSearchQuery);
    props.setChanger(!props.change)
    console.log(props.change)
    console.log("search query changed")

  }, [price]);
  const choosePrice = () => {
    if (!checked1 && !checked2 && !checked3) {
      setPrice([10000, 0]);
      return;
    }
    let min = 10000;
    let max = 0;
    if (checked1) {
      min = numbers[0];
      max = numbers[1];
      // console.log("max1", max)
    }
    if (checked2) {
      min = numbers[1] < min ? numbers[1] : min;
      max = numbers[2] > max ? numbers[2] : max;
      // console.log(2)
    }
    if (checked3) {
      min = numbers[2] < min ? numbers[2] : min;
      max = numbers[3] > max ? numbers[3] : max;
      // console.log(3)
    }

    setPrice([min, max]);
  };
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterPrice"
        aria-expanded="true"
        aria-controls="filterPrice"
      >
        Price
      </div>
      <ul className="list-group list-group-flush show" id="filterPrice">
        <li className="list-group-item">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault1"
              checked={checked1}
              onChange={() => {
                setChecked1(!checked1);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault1">
              ${numbers[0]} - ${numbers[1]} <span className="text-muted"></span>
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault2"
              checked={checked2}
              onChange={() => {
                setChecked2(!checked2);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault2">
              ${numbers[1]} - ${numbers[2]} <span className="text-muted"></span>
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault3"
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault3">
              ${numbers[2]} - ${numbers[3]} <span className="text-muted"></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterPrice;
