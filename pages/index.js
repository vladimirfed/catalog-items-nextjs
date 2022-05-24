import styled from "styled-components";
import { Heading } from "../src/components/Heading";
import Image from "next/image";
import { useState, useEffect } from "react";
// import Catalog from "../src/components/Catalog";
import Slider from "@mui/material/Slider";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/data");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { items: data.items },
  };
};

const Home = ({ items }) => {
  const [data, setData] = useState(items);
  const [filterData, setFilterData] = useState(data);
  const [bookaFilter, setBookaFilter] = useState('true');
  const [typeaFilter, setTypeaFilter] = useState('');
  const [value, setValue] = useState([0, 10000]);


  function commonFilter() {
    let commonFilterData = [...filterData].filter(
      (el)=>el.vehicleType === typeaFilter 
          && el.instantBookable.toString() === bookaFilter
          && el.price >= newValue[0] && el.price <= newValue[1]
    )
    setData(commonFilterData)
  }

  useEffect(() => {
    setData(data);
  }, [data]);

  function typeFilter(vehicleType) {
    setTypeaFilter(vehicleType)
    console.log(typeaFilter)
  }

  function bookFilter(e) {
    e.target.value === "true"
      ? setData([...filterData].filter((el) => el.instantBookable === true))
      : setData([...filterData].filter((el) => el));
    console.log(data);
  }

  const handleChangePrice = (e, newValue ) => {
    setValue(newValue);
  };

  return (
    <div>
      <Heading>Main</Heading>
      <Slider value={value} onChange={handleChangePrice} />
      <div className="filters">
        <div className="price_filter">
          <Slider value={value} onChange={handleChangePrice} />
        </div>

        <div className="type_filter">
          <button className="type" onClick={() => typeFilter("Intergrated")}>
            Intergrated
          </button>
          <button className="type" onClick={() => typeFilter("BuiltIn")}>
            BuiltIn
          </button>
          <button className="type" onClick={() => typeFilter("Alcove")}>
            Alcove
          </button>
          <button className="type" onClick={() => typeFilter("Campervan")}>
            Campervan
          </button>
        </div>

        <div className="toggle_reserve">
          <div className="instantBook">
            Instant book <div className="instantBookableIcon"></div>
          </div>
          <select className="toggleReserveSelect" onChange={bookFilter}>
            <option value="true">Yes</option>
            <option value="false">All options</option>
          </select>
        </div>
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
              <div key={[name, price, toilet, pictures]} className="karavan">
                <div className="img_wrap">
                  {" "}
                  <img
                    src={pictures[0]}
                    width="100%"
                    height="100%"
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

export default Home;

// export const getStaticProps = async () => {
//   const response = await fetch("http://localhost:3000/api/data");
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { items: data.items },
//   };
// };

// const Home = ({ items }) => {
//   const [data, setData] = useState(items);
//   const [filterData, setFilterData] = useState(data);
//   const [value, setValue] = useState([0, 10000]);

//   useEffect(() => {
//     setData(data);
//   }, [data]);

//   function typeFilter(vehicleType) {
//     let newFilterData = [...filterData].filter(
//       (el) => el.vehicleType === vehicleType
//     );
//     setData(newFilterData);
//   }

//   function bookFilter(e) {
//     e.target.value === "true"
//       ? setData([...filterData].filter((el) => el.instantBookable === true))
//       : setData([...filterData].filter((el) => el));
//     console.log(data);
//   }

//   const handleChangePrice = (e, newValue) => {
//     e.preventDefault();
//     setValue(newValue);
//     setData(
//       [...filterData].filter(
//         (el) => el.price >= newValue[0] && el.price <= newValue[1]
//       )
//     );
//   };
//   <>
//     <Catalog items={items} />
//   </>;

//   return (
//     <>
//       <Heading>Main222</Heading>
//       <Catalog items={items} />
//     </>
//   );
// };

// export default Home;
