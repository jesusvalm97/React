import { Saludo } from "./components/Saludo";

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Jesus' edad={24} />
      <Saludo persona='Saul' edad={30} />
      <Saludo persona='Ramon' edad={27} />
    </div>
  );
}

export default App;
