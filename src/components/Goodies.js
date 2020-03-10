import React from 'react'
import contents from '../contents'

const Goodies = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='content'>
          <p>Registering will get you:</p>
          <ul>
            {contents.goodies.map(goody =>
              <li key='goody'>{goody}</li>
            )}
          </ul>
          <hr />
        </div>
      </div>
    </section>
  )
}

export default Goodies
