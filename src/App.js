import "./App.css";
import ColorCard from "./components/ColorCard.js";
import AddColor from "./components/AddColor";

function App() {
  return (
    <div className="App">
      <section className="app_section">
        <h2 className="h2">Pick your favorit color from my palette</h2>
        <div>
          <ColorCard />
          <hr />
          <h2 className="h2">Save your favorite colors</h2>
          <AddColor />
        </div>
      </section>
    </div>
  );
}

export default App;
