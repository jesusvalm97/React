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
        <h3>Nuestro número aumentando: { contador }</h3>
        <h4>
            {
                contador > 2 ? 'Es mayor a dos' : 'Es menor a dos'
            }
        </h4>
        {/* <button onClick={ () => aumentar() }>Aumentar</button> */}
        <button onClick={ () => setContador(contador + 1) }>Aumentar</button>
    </div>
  )
}
