import React from "react";
import { nanoid } from 'nanoid'

function App() {


  //Estado para ir creando una nueva tarea
  const [tarea, setTarea] = React.useState('');
  //Estado arreglo para guardar las nuevas tareas
  const [tareas, setTareas] = React.useState([]);

  //Funcion del formulario para agregar tareas
  const agregarTarea = e => {

    e.preventDefault();
    
    if (!tarea.trim()) {
      console.log('Campo de tarea vacío');
      return;
    }

    console.log(tarea);

    setTareas([
      ...tareas,
      { id: nanoid(10), nombreTarea: tarea }
    ]);

    setTarea('');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simple</h1>

      <hr/>

      <div className="row">

        <div className="col-8">

          <h4 className="text-center">Lista de tareas</h4>

          {/* Aqui se va mostrando el listado de las tareas */}
          <ul className="list-group">

            {
              tareas.map(item => (
                <li className="list-group-item" key={ item.id }>
                  <span className="lead">{ item.nombreTarea }</span>
                  <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                  <button className="btn btn-warning btn-sm float-right">Editar</button>
              </li>
              ))
            }

          </ul>

        </div>

        <div className="col-4">
          <h4 className="text-center">Formulario</h4>

          {/* Formulario para agregar tareas */}
          <form onSubmit={ agregarTarea }>

            <input
             type="text"
             className="form-control mb-2" 
             placeholder="Ingrese tarea"
             onChange={ e => setTarea(e.target.value)}
             value={ tarea }
             />

             <button className="btn btn-dark btn-block" type="submit" >Agregar</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;
