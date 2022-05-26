
const InstantBookFilter = ({bookFilter}) => {
    return (
        <div className="toggle_reserve">
          <div className="instantBook">
          Okamžitá rezervace<div className="instantBookableIcon"></div>
          </div>
          <select className="toggleReserveSelect" onChange={bookFilter}>
            <option className="options" value="false">All options</option>
            <option className="options" value="true">Yes</option>
          </select>
        </div>
    );
};

export default InstantBookFilter;