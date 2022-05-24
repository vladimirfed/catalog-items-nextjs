import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";

import InstantBookFilter from "./filters/InstantBookFilter";
import TypeFilter from "./filters/TypeFilter";
import PriceFilter from "./filters/PriceFilter";

const Catalog = ({ items }) => {
  const [data, setData] = useState(items);
  const [filterData, setFilterData] = useState(data);
  const [filterPriceData, setFilterPriceData] = useState(filterData);
  const [value, setValue] = useState([0, 10000]);

  const [bookFilter, setBookFilter] = useState(data);
  const [filterType, setFilterType] = useState("");
  const [priceValue, setPriceValue] = useState([0, 10000]);

  useEffect(() => {
    setData(data);
  }, [data]);

  function typeFilter(vehicleType) {
    let newFilterData = [...filterData].filter(
      (el) => el.vehicleType === vehicleType
    );
    setData(newFilterData);
  }

  function instantbookFilter(e) {
    e.target.value === "true"
      ? setData([...filterData].filter((el) => el.instantBookable === true))
      : setData([...filterData].filter((el) => el));
    console.log(data);
  }

  const handleChangePrice = (e, newValue ) => {
    console.log(filterData.vehicleType[1])
    setValue(newValue);
    setData(
      [...filterData].filter(
        (el) => el.price >= newValue[0] && el.price <= newValue[1] 
      )
    );
  };



  function commonFilter(vehicleType, e, newValue ){

  }





  return (
    <div className="catalog">
      <Slider
        className="price-slider"
        max={10000}
        value={value}
        onChange={handleChangePrice}
      />
      <div className="filters">
        <div className="price_filter">
          <Slider value={value} onChange={handleChangePrice} />
        </div>
        <TypeFilter typeFilter={typeFilter} />

          <InstantBookFilter instantbookFilter={instantbookFilter} />
      </div>

      <div className="karavans">
        {data &&
          data.map(
            ({
              name,
              price,
              pictures,
              vehicleType,
              location,
              passengersCapacity,
              sleepCapacity,
              toilet,
              shower,
              instantBookable,
            }) => (
              <div key={[name, pictures]} className="karavan">
                <div className="img_wrap">
                  <img
                    src={pictures[0]}
                    width="100%"
                    height="auto"
                    alt={name}
                  />
                </div>
                <div className="parameters">
                  <div className="vehicleType">{vehicleType} </div>
                  <div className="name">
                    <a href="#">{name}</a>
                  </div>
                  <hr className="parameters" />
                  <div className="location">{location} </div>
                  <div className="parametersIcon">
                    <div className="passengersCapacity">
                      <div className="passengersCapacityIcon"> </div>
                      {passengersCapacity}
                    </div>
                    <div className="sleepCapacity">
                      <div className="sleepCapacityIcon"> </div> {sleepCapacity}
                    </div>
                    <div className="toilet">
                      {toilet === true ? (
                        <div className="toiletIcon"> </div>
                      ) : null}
                    </div>
                    <div className="shower">
                      {shower === true ? (
                        <div className="showerIcon"> </div>
                      ) : null}
                    </div>
                  </div>
                  <hr className="parameters" />
                  <div className="price">
                    <p>Cena od:</p> <p>{price} Kc/den</p>
                    {instantBookable === true ? (
                      <div className="instantBookableIcon"> </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Catalog;
