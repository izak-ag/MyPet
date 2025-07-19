import ContactCard from "../../components/ContactCard/index.tsx";
import ContactFilter from "../../components/ContactFilter/index.tsx";
import { Card } from "../../interfaces/Card.ts";
import "./style.css";

const Contact = () => {
  const Cards: Card[] = [
    {
      image: "/images/cat.jpg",
      name: "nome1",
      description: `Lorem ipsum dolor sit amet consectetur. 
      Nec massa amet urna fermentum aliquet. Lectus pulvinar 
      pellentesque ut urna aliquam mattis consectetur facilisi diam. 
      Mattis morbi sit donec ultrices senectus tincidunt vitae venenatis. 
      Mattis mattis tempus dui sapien feugiat leo enim duis...`,
      services: ["serviço 1", "serviço 2"],
      stars: 4.5,
    },
    {
      name: "nome2",
      description: `Lorem ipsum dolor sit amet consectetur. 
      Nec massa amet urna fermentum aliquet. Lectus pulvinar 
      pellentesque ut urna aliquam mattis consectetur facilisi diam. 
      Mattis morbi sit donec ultrices senectus tincidunt vitae venenatis. 
      Mattis mattis tempus dui sapien feugiat leo enim duis...`,
      services: ["serviço 3", "serviço 4"],
      stars: 3.5,
    },
  ];
  return (
    <main className="contact-page">
      <h2>Contatar Prestadores</h2>
      <div className="filter">
        <ContactFilter />
      </div>

      <div className="cards">
        {Cards.map((card) => (
          <ContactCard {...card} />
        ))}
      </div>
    </main>
  );
};

export default Contact;
