
const TypeFilter = ({typeFilter}) => {
    return (
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
    );
};

export default TypeFilter;