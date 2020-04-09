import React from 'react'
import contents from '../contents'

const Goodies = () => {
  return (
    <section className='section pt-0'>
      <div className='container'>
        <div className='content'>
          <p className='text-xl text-primary'>Registering will get you:</p>
          <ul>
            {contents.goodies.map(goody => {
              const style = { color: goody[2] ? goody[2] : '#000' };
              return (
                goody.length > 1 ? <li key='goody'><i style={style} className={goody[1]}></i> {goody[0]}</li> : <li key='goody'>{goody[0]}</li>
              )
            })}
          </ul>
          <hr />
        </div>
      </div>
    </section>
  )
}

export default Goodies
