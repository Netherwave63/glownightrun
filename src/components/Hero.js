import React from 'react'
import contents from '../contents'

const Hero = () => {
  return (
    <section className='hero is-medium is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>
            {contents.name}
          </h1>
          <h2 className='subtitle'>
            {contents.date}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
