import React, { useState } from 'react';
import Slider from "react-slick";
import CustomLink from '../CustomLink/CustomLink';
import css from './CaseStudies.module.css';
import ListCases from '../ListCases/ListCases';
import classNames from "classnames";
import theme from "../../../global/theme";



function CaseStudies3() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <button className={classNames(css.customPrevButton, css.sliderButton)}><span classNames="visually-hidden"></span></button>,
        nextArrow: <button className={classNames(css.customNextButton, css.sliderButton)}><span classNames="visually-hidden"></span></button>,
        customPaging: function (i) {
            return (
                <div className={classNames(css.customDotButton, i === this.currentSlide ? css.active : '' )} >
                    <div className={css.fob} >
                        {i + 1}
                    </div>
                </div>
            );
        },
    };

    return (
        <div className={`${'container'} ${isDarkMode ? 'dark' : 'container'}`}>
            <div className={css.wrapper}>
                <h1>Our Case Studies</h1>
                <p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero.</p>
                <div >
                    <CustomLink />
                </div>
                <Slider {...settings}>
                    <ListCases />
                    <ListCases />
                    <ListCases />
                </Slider>
            </div>
        </div>
    );
}

export default CaseStudies3;



