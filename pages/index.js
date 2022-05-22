import styled from "styled-components";
import { Heading } from "../src/components/Heading";
import Image from 'next/image'
import { useState, useEffect } from 'react'

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

  useEffect( ()=>{
    setData(data)
  },[data])

  function typeFilter(vehicleType){
    let newFilterData = [...filterData].filter(el=> el.vehicleType === vehicleType)
    setData(newFilterData)
  }

  function bookFilter(e){
    e.target.value === true
      ? setData([...filterData].filter(el=> el.instantBookable === true))
      : setData([...filterData].filter(el=> el.instantBookable === false))
    console.log(data)
  }




  return (
    <div>
      <Heading>Main</Heading>
      <div className="filters">
        <div className="price_filter">price_filter</div>

        <div className="type_filter">
            <button className="type" onClick={()=>typeFilter('Intergrated')} >Intergrated</button>
            <button className="type" onClick={()=>typeFilter('BuiltIn')} >BuiltIn</button>
            <button className="type" onClick={()=>typeFilter('Alcove')} >Alcove</button>
            <button className="type" onClick={()=>typeFilter('Campervan')} >Campervan</button>
        </div>

        <div className="toggle_reserve">
          <div className="instantBook">
            Instant book <div className="instantBookableIcon"></div>
          </div>
          <select className="toggleReserveSelect" onChange={bookFilter}>
            <option value="true" >Yes</option>
            <option value="false">No</option>
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
              instantBookable
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
