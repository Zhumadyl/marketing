import React, { useState } from 'react';
import css from './Testimonials.module.css';
import classNames from 'classnames';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import avatar from '../../../assets/avatar.svg'
import theme from "../../../global/theme";
import arrowN from '../../../assets/arrowNext.png'
import arrowND from '../../../assets/arrowNextD.png'
import arrowP from '../../../assets/arrowPrev.png'
import arrowPD from '../../../assets/arrowPrevB.png'
function Testimonials() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
    const stagePadding = {
        paddingLeft: 100,
        paddingRight: 100,
    };
    // Define custom prev/next button components
    const prevButton = (
        <button className={classNames(css.customPrevButton, css.sliderButton)}>
            <span className="visually-hidden">
                <img src={isDarkMode ? arrowP : arrowP} alt="" width='30px' />
            </span>
        </button>
    );
    const nextButton = (
        <button className={classNames(css.customNextButton, css.sliderButton)}>
            <span className="visually-hidden">
                <img src={isDarkMode ? arrowN : arrowN} alt="" width='30px' />
            </span>
        </button>
    );



    return (
        <div className={`${css.wrapper} ${isDarkMode ? css.wrapperD : css.wrapper}`}>
            <div className={`${'container'} `} style={{background: isDarkMode ? ' rgb(34 41 47 / 12%);' : '#F9FAFB'}} >
                <p>Testimonials</p>
                <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>Who Love Our Work</h1>
                <div className={css.main} id='myCarousel'>
                    <AliceCarousel
                    
                        buttonsDisabled={true} // Disable default buttons
                        renderPrevButton={() => prevButton} // Render custom prev button
                        renderNextButton={() => nextButton} // Render custom next button
                        stagePadding={stagePadding}
                    >
                        <div className={css.feedback}>
                            <div className='flex'>
                                <p style={{color: isDarkMode ? 'white' : '#212B36'}}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                                <img src={avatar} alt="" />
                            </div>
                            <h3 style={{color: isDarkMode ? 'white' : '#212B36'}}>Robert Fox</h3>
                            <p>Designer</p>
                        </div>
                        <div className={css.feedback}>
                            <div className='flex'>
                                <p style={{color: isDarkMode ? 'white' : '#212B36'}}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                                <img src={avatar} alt="" />
                            </div>
                            <h3 style={{color: isDarkMode ? 'white' : '#212B36'}}>Robert Fox</h3>
                            <p>Designer</p>
                        </div>
                        <div className={css.feedback}>
                            <div className='flex'>
                                <p style={{color: isDarkMode ? 'white' : '#212B36'}}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                                <img src={avatar} alt="" />
                            </div>
                            <h3 style={{color: isDarkMode ? 'white' : '#212B36'}}>Robert Fox</h3>
                            <p>Designer</p>
                        </div>
                        <div className={css.feedback}>
                            <div className='flex'>
                                <p style={{color: isDarkMode ? 'white' : '#212B36'}}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                                <img src={avatar} alt="" />
                            </div>
                            <h3 style={{color: isDarkMode ? 'white' : '#212B36'}}>Robert Fox</h3>
                            <p>Designer</p>
                        </div>
                    </AliceCarousel>
                </div>
            </div>
        </div>
    );
}
export default Testimonials