
const InstantBookFilter = ({instantbookFilter}) => {
    return (
        <div className="toggle_reserve">
          <div className="instantBook">
            Instant book <div className="instantBookableIcon"></div>
          </div>
          <select className="toggleReserveSelect" onChange={instantbookFilter}>
            <option value="false">All options</option>
            <option value="true">Yes</option>
          </select>
        </div>
    );
};

export default InstantBookFilter;