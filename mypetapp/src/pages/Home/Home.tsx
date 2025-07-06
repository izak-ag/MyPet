import "./style.css";

const Home = () => {
  return (
    <main>
      <section className="session1">
        <div className="info">
          <div className="mainLogo">My Pet</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
            et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut
            adipiscing.
          </p>
          <div className="buttons">
            <button className="btn button3">
              Quero me tornar um prestador
            </button>
            <button className="btn button2">Encontrar um prestador</button>
          </div>
        </div>
        <div className="image"></div>
      </section>
      <section className="aboutUs" id="aboutUs">
        <h2>Sobre Nós</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
          et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
          et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
        </p>
      </section>
      <section className="extra">
        <article>
          <div className="image"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <div className="image"></div>
        </article>
      </section>
    </main>
  );
};

export default Home;
