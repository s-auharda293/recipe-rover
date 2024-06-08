/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import logo from "./assets/logo.png";
import close from "./assets/close.png";
import back from "./assets/back.png";
import open from "./assets/open.png";
import hide from "./assets/hide.png";
import { useEffect, useState, useRef } from "react";

const App = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="container">
      <Nav
        setSearchInput={setSearchInput}
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
      {/* {console.log(searchInput)} */}
      <Main
        searchInput={searchInput}
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
    </div>
  );
};

const Nav = ({ setSearchInput, recipeData }) => {
  return (
    <div className=" navigation">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
        <p>Recipe Rover</p>
      </div>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Search recipes..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="results">
        Found <span>{recipeData.length}</span> results
      </div>
    </div>
  );
};

const Main = ({ searchInput, recipeData, setRecipeData }) => {
  const [showRecipe, setShowRecipe] = useState(true);
  const [showStats, setShowStats] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const abortControllerRef = useRef(null);

  const handleHideRecipes = () => {
    setShowRecipe((showRecipe) => !showRecipe);
  };

  const handleHideStats = () => {
    console.log("clicked");
    setShowStats((showStats) => !showStats);
  };

  useEffect(() => {
    const fetchMealData = async () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      setIsLoading(true);
      setError("");
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchInput}`,
        { signal: controller.signal }
      );
      const data = await response.json();
      if (data.recipes.length === 0) {
        setError("No such recipe!!!");
      }
      setIsLoading(false);
      setRecipeData(data.recipes);
    };
    fetchMealData();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [searchInput, setRecipeData]);

  return (
    <main className="main">
      <LeftBox
        error={error}
        isloading={isloading}
        showRecipe={showRecipe}
        recipeData={recipeData}
        handleHideRecipes={handleHideRecipes}
      />
      <RightBox handleHideStats={handleHideStats} showStats={showStats} />
    </main>
  );
};

const LeftBox = ({
  error,
  isloading,
  showRecipe,
  recipeData,
  handleHideRecipes,
}) => {
  return (
    <div className="box">
      {error ? (
        <p className="loading">{error}</p>
      ) : (
        <>
          {isloading ? (
            <p className="loading">Loading...</p>
          ) : (
            <>
              <div
                className="hide-box-1"
                role="button"
                onClick={() => handleHideRecipes()}
              >
                {showRecipe ? (
                  <img src={hide} alt="close" />
                ) : (
                  <img src={open} alt="open" />
                )}
              </div>
              {showRecipe &&
                recipeData.map((recipe) => (
                  <Card
                    name={recipe.name}
                    image={recipe.image}
                    cuisine={recipe.cuisine}
                    prepTimeMinutes={recipe.prepTimeMinutes}
                    key={recipe.id}
                  />
                ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

const RightBox = ({ handleHideStats, showStats }) => {
  return (
    <div className="box">
      <div className="hide-stats" role="button" onClick={handleHideStats}>
        {showStats ? (
          <img src={hide} alt="hide-button" />
        ) : (
          <img src={open} alt="open-button" />
        )}
      </div>
      {showStats && (
        <>
          <div className="stats">
            <h3>Recipes you liked</h3>
            <div className="stats-calculation">
              <span>#️⃣0 recipes</span>
              <span>⭐0</span>
              <span>⌚0 min</span>
            </div>
          </div>
          <div className="make-list">
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
                Dignissimos nesciunt maxime, cumque ullam expedita dolores
                quaerat fugiat nihil.
              </div>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

const Card = ({ name, image, cuisine, prepTimeMinutes }) => {
  return (
    <div className="card">
      <div className="card-left">
        <img src={image} alt={name} />
      </div>
      <div className="card-right">
        <h3>{name}</h3>
        <div className="card-description">
          <span>{cuisine}</span>
          <span>⌚{prepTimeMinutes} mins</span>
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
