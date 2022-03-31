import "./App.css";

const App = () => {
  const APP_ID = "751b0dda";
  const APP_KEY = "9ca3306b4b4f8d712a546eec69bddfe2";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  return (
    <div className="App">
      <form className="search-form"> 
        <input type="text">
        
        </input>
      </form>
    </div>
  );
}

export default App;
