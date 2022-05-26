const TypeFilter = ({ filterType, typeFilter }) => {
  return (
    <div className="type_filter">
      <div className="filter_text">Typ karavanu</div>
      <div className="types">
        <article className="type">
          <input
            className="type_inpit"
            type="checkbox"
            value="Intergrated"
            checked={filterType.includes("Intergrated")}
            onChange={typeFilter}
          />
          <div>
            <p className="type_name">Intergrated</p>
          </div>
        </article>

        <article className="type">
          <input
            className="type_inpit"
            type="checkbox"
            value="BuiltIn"
            checked={filterType.includes("BuiltIn")}
            onChange={typeFilter}
          />
          <div>
            <p className="type_name">BuiltIn</p>
          </div>
        </article>

        <article className="type">
          <input
            className="type_inpit"
            type="checkbox"
            value="Alcove"
            checked={filterType.includes("Alcove")}
            onChange={typeFilter}
          />
          <div>
            <p className="type_name">Alcove</p>
          </div>
        </article>

        <article className="type">
          <input
            className="type_inpit"
            type="checkbox"
            value="Campervan"
            checked={filterType.includes("Campervan")}
            onChange={typeFilter}
          />
          <div>
            <p className="type_name">Campervan</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TypeFilter;

