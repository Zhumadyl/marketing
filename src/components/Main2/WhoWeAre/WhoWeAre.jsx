import React, { useState } from 'react'
import css from './Main.module.css'
import spotify from '../../../assets/Vector.svg'
import airbnb from '../../../assets/Shape2.svg'
import slack from '../../../assets/Vector2.svg'
import vimeo from '../../../assets/Shape.svg'
import netflix from '../../../assets/Shape3.svg'
import heroku from '../../../assets/logo.svg'
import img from '../../../assets/IMG.png'
import number1 from '../../../assets/one50.png'
import theme from "../../../global/theme";
import num1 from '../../../assets/#.png'
import num2 from '../../../assets/#1.png'
import num3 from '../../../assets/#2.png'
import three2 from '../../../assets/three2.png'
import two0 from '../../../assets/two0.png'
function Main() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);

    return (
        <div className={`${'container'} ${isDarkMode ? 'dark' : 'container'}`}>
            <div className={`${css.brands} ${isDarkMode ? 'dark' : css.brands}`}>
                <img src={spotify} alt="" width='85px' height='25px' id={css.spot} />
                <img src={slack} alt="kk" width='85px' height='25px' id={css.slack} />
                <img src={netflix} alt="kk" width='85px' height='25px' />
                <img src={vimeo} alt="kk" width='85px' height='25px' />
                <img src={heroku} alt="kk" width='85px' height='25px' />
                <img src={airbnb} alt="kk" width='85px' height='25px' />
            </div>
            <img src={img} alt="" className='imgBig' />
            <div className={css.aboutUs}>
                <div className={css.leftAU}>
                    <b>About Us</b>
                    <h1>Who We Are</h1>
                    <p>In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <a href="/about">
                        <button style={{ backgroundColor: isDarkMode ? '#161C24' : 'white' }}>
                            Lean more
                        </button>
                    </a>
                </div>
                <div className={css.rightAU}>
                    <div className={css.flex}>
                        <div className={css.static}>
                            <img src={number1} alt="" width='83px' height='64px' style={{ display: isDarkMode ? 'none' : 'black' }} />
                            <img src={num1} alt="" width='83px' height='64px' style={{ display: isDarkMode ? 'block' : 'none' }} />
                            <p>PROJECTS</p>
                        </div>
                        <div id={css.hr}></div>
                        <div className={css.contentP}>
                            <p>
                                Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.
                            </p>
                        </div>
                    </div>
                    <div className={css.flex}>
                        <div className={css.static}>
                            <img src={three2} alt="" width='83px' height='64px' style={{ display: isDarkMode ? 'none' : 'black' }} />
                            <img src={num2} alt="" width='83px' height='64px' style={{ display: isDarkMode ? 'block' : 'none' }} />
                            <p>Happy CLIENTS</p>
                        </div>
                        <div id={css.hr}></div>
                        <div className={css.contentP}>
                            <p>
                                Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.
                            </p>
                        </div>
                    </div>
                    <div className={css.flex}>
                        <div className={css.static}>
                            <img src={two0} alt="" width='65px' height='64px' style={{ display: isDarkMode ? 'none' : 'black' }} />
                            <img src={num3} alt="" width='83px' height='64px' style={{ display: isDarkMode ? 'block' : 'none' }} />
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div id={css.hr}></div>
                        <div className={css.contentP}>
                            <p >
                                Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main