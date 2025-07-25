import ContactCard from "../../components/ContactCard/index.tsx";
import ContactFilter from "../../components/ContactFilter/index.tsx";
import { Card } from "../../interfaces/Card.ts";
import "./style.css";

const Contact = () => {
  const Cards: Card[] = [
    {
      image: "/images/marco.jpeg",
      name: "Marcos Aurélio",
      description: `Olá! Me chamo Marcos Aurélio e sou cuidador de pets há mais de 3
            anos. Tenho experiência com cães e gatos de todas as idades,
            oferecendo carinho, alimentação, passeios e acompanhamento diário.
            Cuido como se fossem meus, sempre respeitando as orientações dos
            tutores. Também envio fotos e vídeos durante o cuidado para garantir
            sua tranquilidade. Seu pet estará em boas mãos! 🐾`,
      services: ["Passeio", "Banho", "Alimentação"],
      stars: 4.5,
    },
    {
      image: "/images/thais.jpeg",
      name: "Thaís Oliveira",
      description: `Olá! Sou Thais Oliveira, apaixonada por animais e especializada 
      em cuidados personalizados para pets. Ofereço serviços de passeio, alimentação, 
      administração de medicamentos e muito amor durante a sua ausência. Tenho experiência 
      com raças de pequeno e médio porte e prezo sempre pelo bem-estar e rotina do seu companheiro. 
      Meu objetivo é que ele se sinta seguro, feliz e acolhido. Conte comigo para cuidar do seu pet 
      com dedicação e responsabilidade! 🐶🐱💚`,
      services: ["Medicamentos", "Bem estar", "Cuidado"],
      stars: 4.0,
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
