import React, { useEffect, useState } from "react";
import Recipie from "./Recipie";
import "./App.css";

const App = () => {
  const APP_ID = "751b0dda";
  const APP_KEY = "9ca3306b4b4f8d712a546eec69bddfe2";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipies">
        {recipies.map((recipie) => (
          <Recipie
            key={recipie.recipie.label}
            title={recipie.recipie.label}
            calories={recipie.recipie.calories}
            image={recipie.recipie.image}
            ingredients={recipie.recipie.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
