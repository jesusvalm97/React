import React, { Fragment } from 'react'

export const Eventos = () => {

  const eventoClick = () => {
    console.log('Me diste click');
  };

  return (
    /*
    Para retornar si necesidad de tenerlo todo contenido en un div. Se puede retornar un menor que y mayor que vacíos, o bien usar
    las palabras reservadas Fragment (OJO, tiene que estar el import de Fragment con form react):
    <Fragment> </Fragment>
    */
    <>
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
    </>
  )
}
