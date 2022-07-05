import React from "react";
import { nanoid } from 'nanoid'

function App() {


  //Estado para ir creando una nueva tarea
  const [tarea, setTarea] = React.useState('');
  //Estado arreglo para guardar las nuevas tareas
  const [tareas, setTareas] = React.useState([]);
  //Estado para saber si está en modo edicion de tareas o no
  const [modoEdicion, setModoEdicion] = React.useState(false);

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

  //Funcion para eliminar tarea
  const eliminarTerea = id => {
    //Se arma un array excluyendo el item con el mismo id
    const arrayFiltrado = tareas.filter(item => item.id !== id);
    //Se setea el nuevo array filtrado para que en automatico sea un array sin el item a eliminar y eso también afecte visualmente al recorrer el arreglo
    setTareas(arrayFiltrado);
  };

  //Funcion para editar tarea
  const editarTarea = item => {
    //Setar el modo edicion en true para que se haga el cambio de formulario visual
    setModoEdicion(true);
    //Setear la tarea actual para que aparezca sus datos en el formulario
    setTarea(item.nombreTarea);
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

                  <button 
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={ () => eliminarTerea(item.id) }>
                    Eliminar
                  </button>

                  <button
                    className="btn btn-warning btn-sm float-right"
                    onClick={ () => editarTarea(item) }>
                    Editar
                  </button>

              </li>
              ))
            }

          </ul>

        </div>

        <div className="col-4">
          <h4 className="text-center">
            { 
            //Dependiendo del valor de modo edicion, es el titulo que se muestra
            modoEdicion ? 'Editar tarea' : 'Agregar tarea' 
            }
          </h4>

          {/* Formulario para agregar tareas */}
          <form onSubmit={ agregarTarea }>

            <input
             type="text"
             className="form-control mb-2" 
             placeholder="Ingrese tarea"
             onChange={ e => setTarea(e.target.value)}
             value={ tarea }
             />

            { 
            
            //Dependiendo del modo edición es el botón que se muestra
            modoEdicion ? 
            (
              <button className="btn btn-warning btn-block" type="submit" >Editar</button>
            ) 
            : 
            (
              <button className="btn btn-dark btn-block" type="submit" >Agregar</button>
            )
          }
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;
