import React from 'react'

export const Variables = () => {

    const saludo = 'Hola desde constante';
    const imagen = 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/228727821/1800';

  return (
    <div>
        <h2>Nuevo componente { saludo }</h2>
        <img src={ imagen } width='400px'/>
    </div>
  )
}
