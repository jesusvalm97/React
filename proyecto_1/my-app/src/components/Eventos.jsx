import React, { Fragment, useState } from 'react'

export const Eventos = () => {

  /*
  Para cambiar estados, es necesaio primero hacer import a useState con from react. Se declaro entre [], dandole como primer parametro
  el nombre de la constante, segundo el nombre de la funcion que se llamará para cambiar el valor de la constante, todo esto igual a
  useState(), entre parentesis seteas el valor por default, en este caso es un texto y seteamos un texto como valor defeault.
  */
  const [texto, setTexto] = useState('Texto desde estado');

  const eventoClick = () => {
    console.log('Me diste click');
    
    setTexto('Cambiando el texto....');
  };

  return (

    /*
    Para retornar si necesidad de tenerlo todo contenido en un div. Se puede retornar un menor que y mayor que vacíos, o bien usar
    las palabras reservadas Fragment (OJO, tiene que estar el import de Fragment con form react):
    <Fragment> </Fragment>
    */
    <>
        <hr/>
        <h2>{ texto }</h2>
    
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
