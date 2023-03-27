import React from 'react';
import Slider from "react-slick";
import CustomLink from '../CustomLink/CustomLink';
import css from './CaseStudies.module.css';
import ListCases from '../ListCases/ListCases';
import classNames from "classnames";

function CaseStudies3() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <button className={classNames(css.customPrevButton, css.sliderButton)}><span classNames="visually-hidden"><img src='https://cdn-icons-png.flaticon.com/512/545/545680.png' alt="" width='30px' /></span></button>,
        nextArrow: <button className={classNames(css.customNextButton, css.sliderButton)}><span classNames="visually-hidden"><img src="https://cdn-icons-png.flaticon.com/512/2989/2989981.png" alt="" width='30px' /></span></button>,
        customPaging: function (i) {
            return (
                <div className={classNames(css.customDotButton, i === this.currentSlide ? css.active : '')}>
                    <div className={css.fob}>
                        {i + 1}
                    </div>
                </div>
            );
        },
    };

    return (
        <div className='container'>
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




{/* <button className={classNames(css.customPrevButton, css.sliderButton)}><span classNames="visually-hidden"><img src='https://cdn-icons-png.flaticon.com/512/545/545680.png' alt="" width='30px' /></span></button>,
 <button className={classNames(css.customNextButton, css.sliderButton)}><span classNames="visually-hidden"><img src="https://cdn-icons-png.flaticon.com/512/2989/2989981.png" alt="" width='30px' /></span></button>, */}

//  return (
//     <div className='container'>
//         <div className={css.wrapper}>
//             <h1>Our Case Studies</h1>
//             <p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero.</p>
//             <div >
//                 <CustomLink />
//             </div>
//             <Slider {...settings}>
//                 <ListCases />
//                 <ListCases />
//                 <ListCases />
//             </Slider>
//         </div>
//     </div>
// );