import React from 'react'
import contents from '../contents'

const Detail = () => {
  return (
    <section className='section'>
      <div className='container'>
        <p className='text-center text-primary mb-lg' data-aos="fade-up">{contents.thankYouMessage}</p>
        <figure data-aos="fade-up" className='text-center mb-lg'><img src='https://via.placeholder.com/300x238' width='300' height='238' /></figure>
        <p data-aos="fade-up" className='text-center'>{contents.facebookFanPage}</p>
        <hr />
        <p data-aos="fade-up" className='text-center'>The <span className='text-primary text-bold'>{contents.name}</span> will begin at <span className='text-bold'>{contents.time}</span> on <span className='text-bold'>{contents.day}, {contents.date}</span> at <span className='text-bold'>{contents.place}</span>.<br />Their address is <span className='text-bold'>{contents.address}</span>.</p>
        <hr />
      </div>
    </section>
  )
}

export default Detail
