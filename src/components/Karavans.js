// import Image from "next/image";

const Karavans = ({data}) => {
  return (
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
                <img src={pictures[0]} alt={name} />
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
                  <p>Cena od:</p> <p className="price_number">{price} Kc/den</p>
                  {instantBookable === true ? (
                    <div className="instantBookableIcon"> </div>
                  ) : null}
                </div>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default Karavans;
