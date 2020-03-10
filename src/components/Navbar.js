import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img src='https://via.placeholder.com/112x28' width='112' height='28' />
          </a>

          <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item'>
              Option 1
            </a>

            <a className='navbar-item'>
              Option 2
            </a>

            <a className='navbar-item'>
              Option 3
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
