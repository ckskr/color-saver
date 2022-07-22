import "./App.css";
import ColorCard from "./components/ColorCard.js";

function App() {
  return (
    <div className="App">
      <section className="app_section">
        <h1 className="h1">welcome to my color saver</h1>
        <div>
          <ColorCard />
        </div>
      </section>
    </div>
  );
}

export default App;
