import React from 'react'
import contents from '../contents'

const Detail = () => {
  return (
    <section className='section'>
      <div className='container'>
        <p className='text-center'>{contents.thankYouMessage}</p>
        <figure className='text-center'><img src='https://via.placeholder.com/300x238' width='300' height='238' /></figure>
        <p className='text-center'>{contents.facebookFanPage}</p>
        <hr />
        <p className='text-center'>The {contents.name} will begin at {contents.time} on {contents.day}, {contents.date} at {contents.place}.<br />Their address is {contents.address}.</p>
        <hr />
      </div>
    </section>
  )
}

export default Detail
