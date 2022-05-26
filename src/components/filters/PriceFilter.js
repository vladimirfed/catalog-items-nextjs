import Slider from "@mui/material/Slider";


const PriceFilter = ({ filterPrice, priceFilter }) => {
  return (
    <div className="price_filter">
    <div className="filter_text">Cena za den</div>
    <Slider
      className="price_slider"
      max={10000}
      value={filterPrice}
      onChange={priceFilter}
    />
    <div className="price_inputs">
      <input type="number" readOnly value={filterPrice[0]} />
      <input type="number" readOnly value={filterPrice[1]} />
    </div>
  </div>
  );
};

export default PriceFilter;
