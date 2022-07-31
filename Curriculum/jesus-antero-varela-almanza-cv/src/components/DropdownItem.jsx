import React from 'react'

export const DropdownItem = (props) => {
  return (
    <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle disabled" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              { props.title }
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                    props.options.map(option => (
                        <a class="dropdown-item" href={ option.href }>{ option.title }</a>
                    ))
                }
            </div>
          </li>
  )
}
