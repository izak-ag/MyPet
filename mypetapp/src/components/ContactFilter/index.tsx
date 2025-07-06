import "./style.css";

const ContactFilter = () => {
  return (
    <>
      <div className="select">
        <label htmlFor="service" className="label">
          Serviço
        </label>
        <select className="select-input" name="service" id="service">
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
        </select>
      </div>
      <div className="select">
        <label htmlFor="city" className="label">
          Cidade
        </label>
        <select className="select-input" name="city" id="city">
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
        </select>
      </div>
      <button className="serch-button">
        <img src="/icons/search.svg" alt="" />
      </button>
    </>
  );
};

export default ContactFilter;
