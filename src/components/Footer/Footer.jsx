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
import insta from '../../assets/insta.svg'
import tweet from '../../assets/tweet.svg'
import face from '../../assets/face.svg'
function Footer() {
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
              <a href="" id={css.id}>
                <img src={mail} alt="" />
                <p>Hello@agency.com</p>
              </a>
              <a href="">
                <img src={pin} alt="" />
                <p>508 Bridle Avenue Newnan, GA 30263</p>
              </a>
            </div>
            <div className={css.rightFoot}>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Phone' />
              <input type="text" placeholder='Website URL' />
              <button>Send Request </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${css.wrapper}`} style={{backgroundColor: isDarkMode ? 'rgba(145, 158, 171, 0.12)' : '#F9FAFB'}}>
        <div className={`${'flex'} `}>
          <img src={docMail} alt="" />
          <div>
            <h3 style={{color: isDarkMode ? 'white' : '#212B36'}}>Sign Up For Newsletter </h3>
            <p style={{color: isDarkMode ? '#919EAB' : '#637381'}}>Receive 50% discount on first project</p>
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
              <img src={logoD} alt="" style={{display : isDarkMode ? 'block' : 'none'}}/>
              <img src={logo} alt="" style={{display : isDarkMode ? 'none' : 'block'}}/>
              <p>The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.</p>
              <div className={css.socials}>
                <img src={face} alt="" style={{display : isDarkMode ? 'block' : 'none'}} />
                <img src={insta} alt="" style={{display : isDarkMode ? 'block' : 'none'}} />
                <img src={inl} alt="" style={{display : isDarkMode ? 'block' : 'none'}} />
                <img src={tweet} alt="" style={{display : isDarkMode ? 'block' : 'none'}} />
                <img src={social} alt="" style={{display : isDarkMode ? 'none' : 'block'}} />
              </div>
            </div>
            <div className={css.contact}>
              <div className='flex'>
                <img src={message} alt=""  style={{display : isDarkMode ? 'none' : 'block'}}/>
                <img src={mail} alt="" style={{display : isDarkMode ? 'block' : 'none'}}/>
                <p style={{color: isDarkMode ? 'white' : '#212B36'}}>info@example.com</p>
              </div>
              <div className='flex'>
                <img src={marker} alt=""  style={{display : isDarkMode ? 'none' : 'block'}}/>
                <img src={pin} alt="" style={{display : isDarkMode ? 'block' : 'none'}}/>
                <p style={{color: isDarkMode ? 'white' : '#212B36'}}>655 Schaefer Dale</p>
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