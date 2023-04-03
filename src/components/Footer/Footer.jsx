import React, { useState } from 'react'
import css from './Footer.module.css'
import mail from '../../assets/email.svg'
import pin from '../../assets/ic_pin.svg'
import docMail from '../../assets/docMail.svg'
import logo from '../../assets/logoMain.svg'
import social from '../../assets/Social01.svg'
import message from '../../assets/Message.svg'
import marker from '../../assets/marker.svg'
import theme from "../../global/theme";
import logoD from '../../assets/logod.svg'
import arrow from '../../assets/iconbase.svg'
import inl from '../../assets/inl.svg'
import inli from '../../assets/inli.svg'
import insta from '../../assets/insta.svg'
import instagram from '../../assets/instagram.svg'
import tweet from '../../assets/tweet.svg'
import tweeter from '../../assets/tweeter.svg'
import face from '../../assets/face.svg'
import facebook from '../../assets/facebook.svg'


function Footer() {
  const showAlert = () => {
    alert("Your request successfully send!");
  }


  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
  return (
    <div className={css.footWrapper}>
      <div className={css.container} >
        <div className='container'>
          <div className={css.container2}>
            <div className={css.leftFoot}>
              <h1> Get Free
                <hr />
                SEO Analysis</h1>
              <a href="https://mail.google.com/" id={css.id}>
                <img src={mail} alt="" />
                <p>Hello@agency.com</p>
              </a>
              <a href="https://www.google.com/maps/place/thebongeats/@33.3805929,-84.9397429,11z/data=!3m1!4b1!4m6!3m5!1s0x88f4c8f1571eea6d:0xb55215d8bc210654!8m2!3d33.3806716!4d-84.7996573!16s%2Fg%2F11pvkmst6l">
                <img src={pin} alt="" />
                <p>508 Bridle Avenue Newnan, GA 30263</p>
              </a>
            </div>
            <div className={css.rightFoot}>
              <form action="" >
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Phone' />
                <input type="text" placeholder='Website URL' />
                <button onClick={showAlert}>Send Request </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`${css.wrapper}`} style={{ backgroundColor: isDarkMode ? 'rgba(145, 158, 171, 0.12)' : '#F9FAFB' }}>
        <div className={`${'flex'} `}>
          <img src={docMail} alt="" />
          <div>
            <h3 style={{ color: isDarkMode ? 'white' : '#212B36' }}>Sign Up For Newsletter </h3>
            <p style={{ color: isDarkMode ? '#919EAB' : '#637381' }}>Receive 50% discount on first project</p>
          </div>
        </div>

        <div className={css.inputFoot}>
          <input type="text" placeholder='Enter your email' />
          <button>Sign Up</button>
        </div>
      </div>
      <div className={`${'container'} ${isDarkMode ? 'dark' : 'container'}`}>
        <div className={css.flexFoot}>
          <div className={css.leftSocial}>
            <div>
              <img src={logoD} alt="" style={{ display: isDarkMode ? 'block' : 'none' }} />
              <img src={logo} alt="" style={{ display: isDarkMode ? 'none' : 'block' }} />
              <p>The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.</p>
              <div className={css.socials}>
                <img src={face} alt="" style={{ display: isDarkMode ? 'block' : 'none' }} />
                <img src={insta} alt="" style={{ display: isDarkMode ? 'block' : 'none' }} />
                <img src={inl} alt="" style={{ display: isDarkMode ? 'block' : 'none' }} />
                <img src={tweet} alt="" style={{ display: isDarkMode ? 'block' : 'none' }} />


                <a href="https://facebook.com">
                  <img src={facebook} alt="" style={{ display: isDarkMode ? 'none' : 'block' }} />
                </a>
                <a href="https://instagram.com">
                <img src={instagram} alt="" style={{ display: isDarkMode ? 'none' : 'block' }} />
                </a>
                <a href="https://linkedin.com">
                <img src={inli} alt="" style={{ display: isDarkMode ? 'none' : 'block' }} />
                </a>
                <a href="https://twitter.com/">
                <img src={tweeter} alt="" style={{ display: isDarkMode ? 'none' : 'block' }} />
                </a>
              </div>
            </div>
            <div className={css.contact}>
              <div className='flex'>
                <img src={message} alt="" style={{ display: isDarkMode ? 'none' : 'block' }} />
                <img src={mail} alt="" style={{ display: isDarkMode ? 'block' : 'none' }} />
                <p style={{ color: isDarkMode ? 'white' : '#212B36' }}>
                  <a href='https://mail.google.com/'>
                    info@example.com
                  </a>
                </p>
              </div>
              <div className='flex'>
                <img src={marker} alt="" style={{ display: isDarkMode ? 'none' : 'block' }} />
                <img src={pin} alt="" style={{ display: isDarkMode ? 'block' : 'none' }} />
                <p style={{ color: isDarkMode ? 'white' : '#212B36' }}>
                  <a href='https://www.google.com/maps/place/thebongeats/@33.3805929,-84.9397429,11z/data=!3m1!4b1!4m6!3m5!1s0x88f4c8f1571eea6d:0xb55215d8bc210654!8m2!3d33.3806716!4d-84.7996573!16s%2Fg%2F11pvkmst6l'>
                    655 Schaefer Dale
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={css.inputFoot2}>
            <input type="text" placeholder='Email address' />
            <button>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className={css.flexFinal}>
          <p>© 2021. All rights reserved</p>
          <div className='flex'>
            <p>Help Center</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer