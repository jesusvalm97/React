import React from 'react'

export const Formulario = () => {

    const [fruta, setFruta] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');

    const guardarDatos = (e) => {
        e.preventDefault();
        
        if (!fruta.trim()) {
            console.log('Está vacío fruta');
            return;
        }

        if (!descripcion.trim()) {
            console.log('Está vacío descripcion');
            return;
        }

        console.log('Procesando datos...' + fruta + descripcion);
        e.target.reset();
        setFruta('');
        setDescripcion('');

    };

  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={ guardarDatos }>
            <input 
                type='text'
                placeholder='Ingrese fruta'
                className='form-control mb-2'
                onChange={ e => setFruta(e.target.value) }
            />
            <input 
                type='text'
                placeholder='Ingrese descripción'
                className='form-control mb-2'
                onChange={ e => setDescripcion(e.target.value) }
            />
            <button className="btn btn-primary btn-block" type="submit">Agregar</button>
        </form>
    </div>
  )
}
