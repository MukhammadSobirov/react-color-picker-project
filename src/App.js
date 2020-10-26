import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelper";
function App() {
  return (
    <div className="App">
     <div>
       <Palette palette={generatePalette(seedColors[4])}/>
     </div>
    </div>
  );
}

export default App;
