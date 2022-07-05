import React from "react";
import { nanoid } from 'nanoid'

function App() {


  //Estado para ir creando una nueva tarea
  const [tarea, setTarea] = React.useState('');
  //Estado arreglo para guardar las nuevas tareas
  const [tareas, setTareas] = React.useState([]);
  //Estado para saber si está en modo edicion de tareas o no
  const [modoEdicion, setModoEdicion] = React.useState(false);
  //Estado para guardar el id de la tarea que se está editando
  const [id, setId] = React.useState('');
  //Estado para errores
  const [error, setError] = React.useState(null);

  //Funcion del formulario para agregar tareas
  const agregarTarea = e => {

    e.preventDefault();
    
    if (!tarea.trim()) {
      console.log('Campo de tarea vacío');
      setError('Escriba algo por favor....');
      return;
    }

    console.log(tarea);

    setTareas([
      ...tareas,
      { id: nanoid(10), nombreTarea: tarea }
    ]);

    setTarea('');
    setError(null);
  };

  //Funcion para eliminar tarea
  const eliminarTerea = id => {
    //Se arma un array excluyendo el item con el mismo id
    const arrayFiltrado = tareas.filter(item => item.id !== id);
    //Se setea el nuevo array filtrado para que en automatico sea un array sin el item a eliminar y eso también afecte visualmente al recorrer el arreglo
    setTareas(arrayFiltrado);
  };

  //Funcion para mostrar formulario para editar
  const mostrarFormularioEditarTarea = item => {
    //Setar el modo edicion en true para que se haga el cambio de formulario visual
    setModoEdicion(true);
    //Setear la tarea actual para que aparezca sus datos en el formulario
    setTarea(item.nombreTarea);
    //Setear id de la tarea que se va a editar
    setId(item.id);
  };

  //Funcion para editar tarea
  const editarTarea = e => {
    e.preventDefault();

    if (!tarea.trim()) {
      console.log('Campo de tarea vacío');
      setError('Escriba algo por favor....');
      return;
    }

    /*
    Obtener array ya editado. Con el map se indica que si el item coincide con el item, lo sustituya con un nuevo objeto con el mismo id y con una nueva tarea 
    (la que se está editando), de no ser así, agregar al array el item original.
    Este nuevo array se setea como el array tareas, el modo edicion como false, la terea y id como string vacio ya que no se está editando nada
    */
    const arrayEditado = tareas.map(item => item.id === id ? {id: id, nombreTarea: tarea} : item);
    setTareas(arrayEditado);
    //Setar el modo edicion en true para que se haga el cambio de formulario visual
    setModoEdicion(false);
    //Setear la tarea actual para que aparezca sus datos en el formulario
    setTarea('');
    //Setear id de la tarea que se va a editar
    setId('');
    //Setear el error como nulo
    setError(null);
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

              tareas.length === 0 ?
              (
                <li className="list-group-item">No hay tareas</li>
              )
              :
              (
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
                      onClick={ () => mostrarFormularioEditarTarea(item) }>
                      Editar
                    </button>
  
                </li>
                ))
              )

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
          <form onSubmit={ modoEdicion ? editarTarea : agregarTarea }>

            {
              error ? <span className="text-danger">{ error }</span> : null
            }

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
