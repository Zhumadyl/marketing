import React, { useState } from 'react'
import Artboard8 from '../../../assets/Artboard8.png'
import ellipse10 from '../../../assets/Ellipse10.svg'
import classNames from 'classnames';
import css from './Offline.module.css'
import theme from "../../../global/theme";
import arrowWhite from '../../../assets/arrowWhite.svg'

function OfflineSEO() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
    return (
        <div className={css.wrapper}>
            <div className={`${'container'} ${isDarkMode ? 'dark' : 'flex'} ${'flex'} `}>
                <div>
                    <img src={Artboard8} alt="" />
                </div>
                <div className={`${css.content} ${isDarkMode? css.contentD : css.content}`} >
                    <h1>Offline SEO</h1>
                    <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nunc nonummy metus. Donec elit libero, sodales nec</p>
                    <div className='flex'>
                        <img src={ellipse10} alt="" />
                        <b>First Class Flights</b>
                    </div>
                    <div className='flex'>
                        <img src={ellipse10} alt="" />
                        <b>5 Star Accommodations</b>
                    </div>
                    <div className='flex'>
                        <img src={ellipse10} alt="" />
                        <b>Inclusive Packages</b>
                    </div>
                    <div className='flex' id={css.lastDiv}>
                        <img src={ellipse10} alt="" />
                        <b>Latest Model Vehicles</b>
                    </div>
                    <button className='flex'  >
                        Check Our Work
                        <img src='https://cdn-icons-png.flaticon.com/512/2989/2989981.png' width='15px' alt="" style={{display: isDarkMode ? 'none' : 'block'}} />
                        <img src={arrowWhite} width='15px' alt="" style={{display: isDarkMode ? 'block' : 'none'}}/>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default OfflineSEO