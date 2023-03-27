import React from 'react';
import css from './Testimonials.module.css';
import classNames from 'classnames';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import avatar from '../../../assets/avatar.svg'

function Testimonials() {
    const stagePadding = {
        paddingLeft: 100,
        paddingRight: 100,
    };
    // Define custom prev/next button components
    const prevButton = (
        <button className={classNames(css.customPrevButton, css.sliderButton)}>
            <span className="visually-hidden">
                <img src='https://cdn-icons-png.flaticon.com/512/545/545680.png' alt="" width='30px' />
            </span>
        </button>
    );
    const nextButton = (
        <button className={classNames(css.customNextButton, css.sliderButton)}>
            <span className="visually-hidden">
                <img src="https://cdn-icons-png.flaticon.com/512/2989/2989981.png" alt="" width='30px' />
            </span>
        </button>
    );



    return (
        <div className={css.wrapper}>
            <div className="container">
                <p>Testimonials</p>
                <h1>Who Love Our Work</h1>
                <div className={css.main} id='myCarousel'>
                    <AliceCarousel
                        buttonsDisabled={true} // Disable default buttons
                        renderPrevButton={() => prevButton} // Render custom prev button
                        renderNextButton={() => nextButton} // Render custom next button
                        stagePadding={stagePadding}
                    >
                        <div className={css.feedback}>
                            <div className='flex'>
                                <p>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                                <img src={avatar} alt="" />
                            </div>
                            <h3>Robert Fox</h3>
                            <p>Designer</p>
                        </div>
                        <div className={css.feedback}>
                            <div className='flex'>
                                <p>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                                <img src={avatar} alt="" />
                            </div>
                            <h3>Robert Fox</h3>
                            <p>Designer</p>
                        </div>
                        <div className={css.feedback}>
                            <div className='flex'>
                                <p>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                                <img src={avatar} alt="" />
                            </div>
                            <h3>Robert Fox</h3>
                            <p>Designer</p>
                        </div>
                        <div className={css.feedback}>
                            <div className='flex'>
                                <p>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                                <img src={avatar} alt="" />
                            </div>
                            <h3>Robert Fox</h3>
                            <p>Designer</p>
                        </div>
                    </AliceCarousel>
                </div>
            </div>
        </div>
    );
}
export default Testimonials