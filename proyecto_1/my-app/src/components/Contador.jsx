import React from 'react'

export const Contador = () => {

    const [contador, setContador] = React.useState(0);

    // const aumentar = () => {
    //     console.log('click');
    //     setContador(contador + 1);
    // };

  return (
    <div>
        <h1>Contador</h1>
        <h3>Nuertro número aumentando: { contador }</h3>
        {/* <button onClick={ () => aumentar() }>Aumentar</button> */}
        <button onClick={ () => setContador(contador + 1) }>Aumentar</button>
    </div>
  )
}
