import { Menu } from "./components/Menu";
import { Perfil } from "./components/Perfil";
import { Softskills } from "./components/Softskills";
import { Hardskills } from "./components/Hardskills";
import { Idiomas } from "./components/Idiomas";
import { Experiencia } from "./components/Experiencia";
import { Educacion } from "./components/Educacion";
import { Hobbies } from "./components/Hobbies";
import { Contacto } from "./components/Contacto";

function App() {
  return (
    <div className="App">
      <Menu />
      <h1>JES&Uacute;S ANTERO VARELA ALMANZA</h1>
      <Perfil />
      <Softskills />
      <Hardskills />
      <Idiomas />
      <Experiencia />
      <Educacion />
      <Hobbies />
      <Contacto />
    </div>
  );
}

export default App;
