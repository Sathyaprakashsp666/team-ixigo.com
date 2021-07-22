import React from 'react'
import style from './Footer.module.css'
import Routes from './Routes'
import FooterLink from './FooterLink'

const Footer = () => {
  var footerDescription = [
    'ABOUT US',
    'PRESS',
    'FAQ',
    'MOBILE',
    'PRIVACY',
    'TERMS OF USE',
    'CAREERS',
    'CUSTOMER SERVICE'
  ]
  return (
    <div>
      <div className={style.first_Container}>
        <div className={style.text}>
          <p>Planning your next trip?</p>
          <span>
            Subscribe to our newsletter. Get the latest travel trends & deals!
          </span>
        </div>
        <div className={style.input}>
          <input
            type='text'
            aria-label='email'
            placeholder='Enter email id'
            className={style.email_input}
          />
          <button className={style.email_button}>SUBSCRIBE</button>
        </div>
      </div>

      <div className={style.Footer_second_container}>
        <div className={style.footer_button}>
          <FooterLink />
        </div>
        <div>
          <Routes />
        </div>
        <div className={style.footerDescription}>
          {footerDescription.map(item=>{
            return (<li>{item}</li>)
          })}
        </div>
      </div>

      <div className={style.Footer_third_container}></div>
    </div>
  )
}

export default Footer
