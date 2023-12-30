import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="sunbg">
        <div className="sun"></div>
        <div className="shadow"></div>
      </div>
      <div className="glarebg">
        <div className="glare"></div>
      </div>
      <img src="africanElephant.png" alt="" />
      <div className="texts">
        <h1>
          The <br /> Elephant <br /> Queen
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab
          nostrum temporibus possimus dolor. Minus ipsam dolore voluptatum
          alias. Nulla quasi ut illo eos asperiores quos, aut minus corrupti at!
        </p>
      </div>
      <div className="notes">
        <p>African elephant</p>
        <hr />
        <p>species left  50</p>
      </div>
    </div>
  );
};

export default Home;
