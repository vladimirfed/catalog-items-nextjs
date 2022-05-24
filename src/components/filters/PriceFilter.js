import Slider from "@mui/material/Slider";

const PriceFilter = ({value, handleChangePrice }) => {
    return (
        <div className="price_filter">
          <Slider value={value} onChange={handleChangePrice} />
        </div>
    );
};

export default PriceFilter;