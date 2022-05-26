import { useState, useEffect } from "react";
import InstantBookFilter from "./filters/InstantBookFilter";
import TypeFilter from "./filters/TypeFilter";
import PriceFilter from "./filters/PriceFilter";
import Karavans from "./Karavans";

const Catalog = ({ items }) => {
  const [data, setData] = useState(items);
  const [filterData, setFilterData] = useState(data);
  const [filterBook, setFilterBook] = useState("false");
  const [filterPrice, setFilterPrice] = useState([0, 10000]);
  const [filterType, setFilterType] = useState([
    "Intergrated",
    "BuiltIn",
    "Alcove",
    "Campervan",
  ]);

  const bookFilter = (e) => setFilterBook(e.target.value);

  const priceFilter = (e) => setFilterPrice(e.target.value);

  const typeFilter = (e) => {
    e.target.checked
      ? setFilterType([...filterType, e.target.value])
      : setFilterType(filterType.filter((id) => id !== e.target.value));
  };

  useEffect(() => {
    let dataForRender = [];
    let multiFilter = [...filterData]
      .filter((el) => el.price >= filterPrice[0] && el.price <= filterPrice[1])
      .filter((el) =>
        filterBook !== "false"
          ? el.instantBookable.toString() === filterBook
          : el
      )
      .filter((el) => {
        if (filterType.length === 0) {
          return el;
        } else {
          for (let key of filterType) {
            el.vehicleType === key ? dataForRender.push(el) : null;
          }
        }
      });
    setData(dataForRender);
  }, [filterPrice, filterBook, filterType]);

  return (
    <div className="catalog">
      <div className="filters">
        <PriceFilter filterPrice={filterPrice} priceFilter={priceFilter} />
        <TypeFilter filterType={filterType} typeFilter={typeFilter} />
        <InstantBookFilter bookFilter={bookFilter} />
      </div>
      <Karavans data={data} />
    </div>
  );
};

export default Catalog;
