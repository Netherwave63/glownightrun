import React from 'react'
import contents from '../contents'

const Footer = () => {
  return (
    <footer className='section pt-0'>
      {contents.footerMessage.map(message =>
        <p className='text-center'>{message}</p>
      )}
    </footer>
  )
}

export default Footer
