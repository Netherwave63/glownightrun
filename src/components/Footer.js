import React from 'react'
import contents from '../contents'

const Footer = () => {
  return (
    <footer className='section pt-0'>
      {contents.footerMessage.map((message, index) =>
        index == contents.footerMessage.length - 1 ? <p className='text-center'>{message} <a href={contents.googleFormLink} target='_blank'>{contents.googleFormLink}</a></p> : <p className='text-center'>{message}</p>
      )}
    </footer>
  )
}

export default Footer
