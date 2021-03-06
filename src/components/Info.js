import React from 'react'
import contents from '../contents'

const Info = () => {
  return (
    <section className='section pt-0'>
      <div className='container'>
        {contents.infos.map(info =>
          <div>
            <dl>
              <dt className='text-primary text-lg'>{info.heading}</dt>
              <dd>{info.description}</dd>
            </dl>
            <hr />
          </div>
        )}
        <figure className='text-center'><img src={contents.images.bottom} width='300' /></figure>
        <hr />
      </div>
    </section>
  )
}

export default Info
