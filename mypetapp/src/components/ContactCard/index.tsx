import { Card } from "../../interfaces/Card";
import "./style.css";



const ContactCard = ({ image, name, stars, services, description }: Card) => {
  return (
    <article className="contact-card-article">
      <div className="contact-card">
        {image ? (
          <img src={image} alt="profileFood" className="contact-card-image" />
        ) : (
          <div className="contact-card-image-div" />
        )}

        <div className="contact-card-info">
          <div className="contact-card-resume">
            <span>{name}</span>
            <div className="contact-card-stars">
              <img src="/icons/star.svg" alt="" />
              {stars}/5
            </div>
            <ul>
              {services.map((service) => (
                <li>{service}</li>
              ))}
            </ul>
          </div>

          <p className="description">{description}</p>
        </div>
      </div>
      <button className="next-button">
        <img src="/icons/rightArrow.svg" alt="" />
      </button>
    </article>
  );
};

export default ContactCard;
