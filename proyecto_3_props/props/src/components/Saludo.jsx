import React from 'react'

export const Saludo = (props) => {

    console.log(props);

  return (
    <div>
        <h2>Saludando a { props.persona }</h2>
        <p>Edad: { props.edad }</p>
    </div>
  )
}
