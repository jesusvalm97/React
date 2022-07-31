import React from 'react'
import { DropdownItem } from './DropdownItem'

export const Menu = () => {

  //Options to the option descargarCurriculum
  var descargarCurriculum_options = [
    {title:'Corto', href:'#'},
    {title:'Largo', href:'#'}
  ];

  return (
    <nav id='containerMenu' className='navbar navbar-expand-lg navbar-light bg-light'>
      <a href="#containerPerfil" className='navbar-brand'>Inicio</a>

      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>

          <li className='nav-item'>
            <a href='#containerPerfil' className='nav-link'>Perfil</a>
          </li>

          <li className='nav-item'>
            <a href='#containerSoftskills' className='nav-link'>Softskills</a>
          </li>

          <li className='nav-item'>
            <a href='#containerHardskills' className='nav-link'>Hardskills</a>
          </li>

          <li className='nav-item'>
            <a href='#containerIdiomas' className='nav-link'>Idiomas</a>
          </li>

          <li className='nav-item'>
            <a href='#containerExperiencia' className='nav-link'>Experiencia</a>
          </li>

          <li className='nav-item'>
            <a href='#containerEducacion' className='nav-link'>Educaci&oacute;n</a>
          </li>

          <li className='nav-item'>
            <a href='#containerHobbies' className='nav-link'>Hobbies</a>
          </li>

          <li className='nav-item'>
            <a href='#containerContacto' className='nav-link'>Contacto</a>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle disabled" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Proyectos
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Proyecto 1</a>
              <a class="dropdown-item" href="#">Proyecto 2</a>
              <a class="dropdown-item" href="#">Proyecto 3</a>
            </div>
          </li>

          <DropdownItem 
          title='Descargar curriculum' 
          options={descargarCurriculum_options} />

          <li className='nav-item'>
            <a href='https://drive.google.com/file/d/1jkfm0AQxvDISsYP4W5kro-Hp2FDsW0kU/view?usp=sharing' className='nav-link'>Autobiograf&iacute;a</a>
          </li>

        </ul>
      </div>

    </nav>
    // <ul>
    //     <li>
    //       <a href="">Descargar curriculum</a>
    //       <ul>
    //         <li>
    //           <a href=''>Corto</a>
    //           <ul>
    //             <li><a href='https://drive.google.com/file/d/1ValVibTBDld2ULSyPmD-bh1lK7oxGxHQ/view?usp=sharing'>Español</a></li>
    //             <li><a href='https://drive.google.com/file/d/1YB4yMU8kBt5UQ4DmnnCavmniiWJD0aq7/view?usp=sharing'>Ingles</a></li>
    //           </ul>
    //         </li>
    //         <li>
    //           <a href=''>Largo</a>
    //           <ul>
    //             <li><a href='https://drive.google.com/file/d/1q9VnZXha8yP8Z-nk1F4H3kLBGI9IHGA1/view?usp=sharing'>Español</a></li>
    //             <li><a href=''>Ingles</a></li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>

    //     <li><a href='https://drive.google.com/file/d/1jkfm0AQxvDISsYP4W5kro-Hp2FDsW0kU/view?usp=sharing'>Autobiograf&iacute;a</a></li>
    // </ul>
  )
}