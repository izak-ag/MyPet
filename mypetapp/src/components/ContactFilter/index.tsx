import { cities } from "../../constants/cities.ts";
import { services } from "../../constants/services.ts";
import "./style.css";

const ContactFilter = () => {
  return (
    <>
      <div className="select">
        <label htmlFor="service" className="label">
          Serviço
        </label>
        <select
          className="select-input"
          defaultValue={0}
          name="service"
          id="service"
        >
          <option disabled value={0}>
            -
          </option>
          {services.map((service) => (
            <option value={service.id}>{service.service}</option>
          ))}
        </select>
      </div>
      <div className="select">
        <label htmlFor="city" className="label">
          Cidade
        </label>
        <select className="select-input" defaultValue={0} name="city" id="city">
          <option disabled value={0}>
            -
          </option>
          {cities.map((city) => (
            <option value={city.id}>{city.city}</option>
          ))}
        </select>
      </div>
      <button className="serch-button">
        <img src="/icons/search.svg" alt="" />
      </button>
    </>
  );
};

export default ContactFilter;
