import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./LatestPost.module.css";
import "react-alice-carousel/lib/alice-carousel.css";


import AliceCarousel from 'react-alice-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slidesToScroll from "react-slick";
import ImgFirstAvatar from "./images/imga.svg";
import ImgSecondAvatar from "./images/imgg.svg";
import ImgThirdAvatar from "./images/img.svg";
import Ellipse from "./images/Ellipse 16.svg";
import classNames from "classnames";




function LatePosts() {
  const stagePadding = {
    paddingLeft: 500,
    paddingRight: 500,
}
  const prevButton = (
    <button className={classNames(styles.customPrevButton, styles.sliderButton)}>
        <span classNames="visually-hidden">
            <img src='https://cdn-icons-png.flaticon.com/512/545/545680.png' alt="" width='30px' />
        </span>
    </button>
);
const nextButton = (
    <button className={classNames(styles.customNextButton, styles.sliderButton)}>
        <span classNames="visually-hidden">
            <img src="https://cdn-icons-png.flaticon.com/512/2989/2989981.png" alt="" width='30px' />
        </span>
    </button>
 
);

  return (
    <div className={styles.MainLatePost}>
      <div className="container">
        <h2>Latest Posts</h2>
        
        <AliceCarousel buttonsDisabled={true} // Disable default buttons
                        renderPrevButton={() => prevButton} // Render custom prev button
                        renderNextButton={() => nextButton} // Render custom next button
                        stagePadding={stagePadding}
                        

>
         
        
        <div className={styles.LatePosts}>
         

       
          <div className={styles.FirstPost}>
            
            <div className={styles.Date}>
              <p>15 Dec 2020</p>
              <img src={Ellipse} alt="" />
              <p>8 min read </p>
            </div>
            <div className={styles.AnyMechanical}>
              <h1>Any mechanical keyboard enthusiasts in design?</h1>
            </div>
            <div className={styles.Bottom}>
              <img src={ImgFirstAvatar} alt="" />
              <p>Maddox Fletcher</p>
            </div>
          </div>
          <div className={styles.SecondPost}>
            <div className={styles.Date}>
              <p>04 Jul 2021</p>
              <img src={Ellipse} alt="" />
              <p>8 min read </p>
            </div>
            <div className={styles.Design}>
              <h1>How to design a product that can grow itself 10x in year:</h1>
            </div>
            <div className={styles.Cruz}>
              <img src={ImgSecondAvatar} alt="" />
              <p>Cruz Truong</p>
            </div>
          </div>
          <div className={styles.FirstPost}>
            <div className={styles.Date}>
              <p>19 Apr 2019</p>
              <img src={Ellipse} alt="" />
              <p>8 min read </p>
            </div>
            <div className={styles.AnyMechanical}>
              <h1>Any mechanical keyboard enthusiasts in design?</h1>
            </div>
            <div className={styles.Bottom}>
              <img src={ImgThirdAvatar} alt="" />
              <p>Margaret Donnelly</p>
            </div>
          </div>
          
         
        </div>
        <div className={styles.LatePosts}>
       
          <div className={styles.FirstPost}>
            
            <div className={styles.Date}>
              <p>15 Dec 2020</p>
              <img src={Ellipse} alt="" />
              <p>8 min read </p>
            </div>
            <div className={styles.AnyMechanical}>
              <h1>Any mechanical keyboard enthusiasts in design?</h1>
            </div>
            <div className={styles.Bottom}>
              <img src={ImgFirstAvatar} alt="" />
              <p>Maddox Fletcher</p>
            </div>
          </div>
          <div className={styles.SecondPost}>
            <div className={styles.Date}>
              <p>04 Jul 2021</p>
              <img src={Ellipse} alt="" />
              <p>8 min read </p>
            </div>
            <div className={styles.Design}>
              <h1>How to design a product that can grow itself 10x in year:</h1>
            </div>
            <div className={styles.Cruz}>
              <img src={ImgSecondAvatar} alt="" />
              <p>Cruz Truong</p>
            </div>
          </div>
          <div className={styles.FirstPost}>
            <div className={styles.Date}>
              <p>19 Apr 2019</p>
              <img src={Ellipse} alt="" />
              <p>8 min read </p>
            </div>
            <div className={styles.AnyMechanical}>
              <h1>Any mechanical keyboard enthusiasts in design?</h1>
            </div>
            <div className={styles.Bottom}>
              <img src={ImgThirdAvatar} alt="" />
              <p>Margaret Donnelly</p>
            </div>
          </div>
          
         
        </div>
        <div className={styles.LatePosts}>
       
          <div className={styles.FirstPost}>
            
            <div className={styles.Date}>
              <p>15 Dec 2020</p>
              <img src={Ellipse} alt="" />
              <p>8 min read </p>
            </div>
            <div className={styles.AnyMechanical}>
              <h1>Any mechanical keyboard enthusiasts in design?</h1>
            </div>
            <div className={styles.Bottom}>
              <img src={ImgFirstAvatar} alt="" />
              <p>Maddox Fletcher</p>
            </div>
          </div>
          <div className={styles.SecondPost}>
            <div className={styles.Date}>
              <p>04 Jul 2021</p>
              <img src={Ellipse} alt="" />
              <p>8 min read </p>
            </div>
            <div className={styles.Design}>
              <h1>How to design a product that can grow itself 10x in year:</h1>
            </div>
            <div className={styles.Cruz}>
              <img src={ImgSecondAvatar} alt="" />
              <p>Cruz Truong</p>
            </div>
          </div>
          <div className={styles.FirstPost}>
            <div className={styles.Date}>
              <p>19 Apr 2019</p>
              <img src={Ellipse} alt="" />
              <p>8 min read </p>
            </div>
            <div className={styles.AnyMechanical}>
              <h1>Any mechanical keyboard enthusiasts in design?</h1>
            </div>
            <div className={styles.Bottom}>
              <img src={ImgThirdAvatar} alt="" />
              <p>Margaret Donnelly</p>
            </div>
          </div>
          
         
        </div>

        </AliceCarousel>
      </div>
      
    </div>
  );
}
export default LatePosts;
