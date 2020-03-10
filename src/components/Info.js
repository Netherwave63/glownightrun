import React from 'react'
import contents from '../contents'

const Info = () => {
  return (
    <section className='section'>
      <div className='container'>
        {contents.infos.map(info =>
          <div>
            <dl>
              <dt>{info.heading}</dt>
              <dd>{info.description}</dd>
            </dl>
            <hr />
          </div>
        )}
        <figure className='text-center'><img src='https://via.placeholder.com/300x300' width='300' height='300' /></figure>
        <hr />
      </div>
    </section>
  )
}

export default Info