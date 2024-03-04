
import './App.css';
import DiceBox from "./components/DiceBox.jsx"
import Die from "./components/Die.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dice Rolling Game</h1>
        <DiceBox />
        <Die number={3} /> {/* Example: Displaying a specific number */}
      </header>
    </div>
  );
}

export default App;
