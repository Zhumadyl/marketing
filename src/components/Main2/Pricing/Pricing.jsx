import React, { useState } from 'react'
import css from './Pricing.module.css'
import plane from '../../../assets/plane.svg'
import rocket from '../../../assets/rocket1.svg'
import rocket2 from '../../../assets/rocket2.svg'
import checkIcon from '../../../assets/checkIcon.svg'
import theme from "../../../global/theme";


function Pricing() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
    return (
        <div className={`${css.wrapper} ${isDarkMode ? 'dark' : css.wrapper}`}>
            <div className={`${'container'} ${isDarkMode ? 'dark' : 'container'}`}>
                <p>Pricing</p>
                <h1>Check Our Pricing</h1>
                <div className={css.flex}>
                    <p>Choose the perfect plan for your needs. <br />
                        Always flexible to grow</p>
                    <div className='flex'>
                        <b>MONTHLY</b>
                        <label className={css.toggle}>
                            <input className={css.toggleCheckbox} type="checkbox" />
                            <div className={css.toggleSwitch}></div>
                        </label>
                        <b>YEARLY (save 10%)</b>
                    </div>
                </div>
            </div>
            <div className={`${'container'} ${isDarkMode ? 'dark' : 'container'}`}>
                <div className='flex' >
                    <div className={css.card} style={{backgroundColor: isDarkMode ? '#212B36' : 'white'}} >
                        <div className='container' style={{backgroundColor: isDarkMode ? '#212B36' : 'white'}}>
                            <div className='flex'>
                                <div className={css.cardHeader}>
                                    <h3 >Basic</h3>
                                </div>
                                <img src={plane} alt="" />
                            </div>
                            <div className='flex'>
                                <h1>$29</h1>
                                <p>/mo</p>
                            </div>
                            <p>Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien</p>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>Auto update mode</b>
                            </div>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>Online operator 24/7</b>
                            </div>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>International posting</b>
                            </div>
                            <a href="/contact" id={css.id}>
                                <button>Get Started</button>
                            </a>
                        </div>
                    </div>
                    <div className={css.card1} style={{backgroundColor: isDarkMode ? '#212B36' : 'white'}} >
                        <div className='container' style={{backgroundColor: isDarkMode ? '#212B36' : 'white'}}>
                            <div className='flex'>
                                <div className={css.cardHeader}>
                                    <h3 >Standard</h3>
                                </div>
                                <img src={rocket} alt="" />
                            </div>
                            <div className='flex'>
                                <h1>$59</h1>
                                <p>/mo</p>
                            </div>
                            <p>Maecenas nec odio et ante tincidunt tempus.</p>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>Auto update mode</b>
                            </div>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>Online operator 24/7</b>
                            </div>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>International posting</b>
                            </div>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>Unique newsletters</b>
                            </div>
                            <a href="/contact" id={css.id}>
                                <button>Get Started</button>
                            </a>
                        </div>
                    </div>
                    <div className={css.card2} style={{backgroundColor: isDarkMode ? '#212B36' : 'white'}}>
                        <div className='container' style={{backgroundColor: isDarkMode ? '#212B36' : 'white'}}>
                            <div className='flex'>
                                <div className={css.cardHeader}>
                                    <h3 >Premium</h3>
                                </div>
                                <img src={rocket2} alt="" />
                            </div>
                            <div className='flex'>
                                <h1>$99</h1>
                                <p>/mo</p>
                            </div>
                            <p>Sed lectus. Sed consequat, leo eget bibendum sodales</p>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>Auto update mode</b>
                            </div>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>Online operator 24/7</b>
                            </div>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>Unique newsletters</b>
                            </div>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>20 Design templates</b>
                            </div>
                            <div className={css.advantages}>
                                <img src={checkIcon} alt="" />
                                <b>International posting</b>
                            </div>
                            <a href="/contact" id={css.id}>
                                <button>Get Started</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing