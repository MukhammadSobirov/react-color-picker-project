import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
     <div>
       <Palette {...seedColors[7]}/>
     </div>
    </div>
  );
}

export default App;
