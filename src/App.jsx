import logo from "./assets/logo.png";
import close from "./assets/close.png";
import back from "./assets/back.png";
import hide from "./assets/hide.png";

const App = () => {
  console.log(logo);
  return (
    <div className="container">
      <Nav />
      <Main />
    </div>
  );
};

const Nav = () => {
  return (
    <div className=" navigation">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />

        <p>Recipe Rover</p>
      </div>
      <div>
        <input type="text" className="input" placeholder="Search recipes..." />
      </div>
      <div className="results">
        Found <span>20</span> results
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <main className="main">
      <div className="box">
        <div className="hide-box-1" role="button">
          <img src={hide} alt="" />
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="box">
        <div className="stats">
          <h3>Recipes you liked</h3>
          <div className="stats-calculation">
            <span>#️⃣0 recipes</span>
            <span>⭐0</span>
            <span>⌚0 min</span>
          </div>
          <div className="hide" role="button">
            <img src={hide} alt="" />
          </div>
        </div>
        <div className="make-list">
          <StatListCard />
          <StatListCard />
          <StatListCard />
          <StatListCard />
          <StatListCard />
          <StatListCard />
          <StatListCard />
        </div>
        {/* <div className="selected-food">
          <div className="back">
            <img src={back} alt="back" />
          </div>
          <div className="food-description">
            <img
              src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=360&t=st=1717681390~exp=1717681990~hmac=6da01804a19a7619810b75a5be4b8cdbfef33a85f03808d0870baa0fcec54d31"
              alt="image"
            />
            <div className="selected-food-stats">
              <h2>Paneer Masala</h2>
              <div className="food-stats-summary">
                <span>Indian</span>
                <span>⭐0</span>
                <span>⌚30 mins</span>
              </div>
            </div>
          </div>
          <div className="food-stats">
            <div className="rating">Rating</div>
            <div className="food-summary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              sed ad deserunt non! Officia amet voluptatum id eaque ut quia.
              Dignissimos nesciunt maxime, cumque ullam expedita dolores quaerat
              fugiat nihil.
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

const Card = () => {
  return (
    <div className="card">
      <div className="card-left">
        <img
          src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=360&t=st=1717681390~exp=1717681990~hmac=6da01804a19a7619810b75a5be4b8cdbfef33a85f03808d0870baa0fcec54d31"
          alt="image"
        />
      </div>
      <div className="card-right">
        <h3>Paneer masala</h3>
        <div className="card-description">
          <span>Indian</span>
          <span>⌚30 mins</span>
        </div>
      </div>
    </div>
  );
};

const StatListCard = () => {
  return (
    <div className="card">
      <div className="card-left">
        <img
          src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=360&t=st=1717681390~exp=1717681990~hmac=6da01804a19a7619810b75a5be4b8cdbfef33a85f03808d0870baa0fcec54d31"
          alt="food"
        />
      </div>
      <div className="card-right">
        <h3>Paneer masala</h3>
        <div className="card-description">
          <span>Indian</span>
          <span>⭐0</span>
          <span>⌚30 mins</span>
          <span role="button" className="close-button">
            <img src={close} alt="close-button" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default App;
