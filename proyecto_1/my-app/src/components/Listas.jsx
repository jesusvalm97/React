import React, { useState } from 'react'

export const Listas = () => {

    const estadoInicial = [
        { id: 1, texto: 'tarea 1'},
        { id: 2, texto: 'tarea 2'},
        { id: 3, texto: 'tarea 3'},
    ];

    const [lista, setLista] = useState(estadoInicial);

  return (
    <>
        <h2>Listas</h2>
        {
            /*
            Para recorrer una lista podemos usar el map. En este caso en react ocupamos setear a cada elemento creado un key,
            asi que cada que se utilice el map, en la funcion mandamos como parametro también el index y lo asignamos al key
            de cada elemento
            */
            lista.map((item, index) => (
                <h4 key={ item.id }>{ item.texto }</h4>
            ))
        }
    </>
  )
}
