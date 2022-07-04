import React from 'react'

export const Eventos = () => {

  const eventoClick = () => {
    console.log('Me diste click');
  };

  return (
    <div>
        <hr/>
        <h2>Eventos</h2>
        {/* 
        Para asignar un evento click hay dos formas:
        */}

        {/* 
        La primera es solo llamando entre llaves a la funcion
         */}
        <button onClick={ eventoClick } >Click 1</button>

         <br/>
         <br/>

        {/* 
        La segunda es declarando una funcion, en este caso se hizo de tipo flecha y que llame a la funcion deseada con parentesis.
         Esto nos sirve para cuando es una funcion que reciba parametros
         */}
        <button onClick={ () => eventoClick() } >Click 2</button>
    </div>
  )
}
