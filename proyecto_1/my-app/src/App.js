import { Parrafo } from "./components/Parrafo";
import { Variables } from "./components/Variables";
import { Eventos } from "./components/Eventos";
import { Contador } from "./components/Contador";

function App() {
  return (
    <div className="App">
      <h1>Hola mundo react</h1>
      <Parrafo />
      <Variables />
      <Eventos />
      <Contador />
    </div>
  );
}

export default App;
