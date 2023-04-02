import React, { Component, useState } from "react";
import styles from "./LatestPost.module.css";
import "react-alice-carousel/lib/alice-carousel.css";
import theme from "../../global/theme";
import AliceCarousel from 'react-alice-carousel';
import ImgFirstAvatar from "./images/imga.svg";
import ImgSecondAvatar from "./images/imgg.svg";
import ImgThirdAvatar from "./images/img.svg";
import Ellipse from "./images/Ellipse 16.svg";
import classNames from "classnames";
import arrowN from '../../assets/arrowNext.png'
import arrowND from '../../assets/arrowNextD.png'
import arrowP from '../../assets/arrowPrev.png'
import arrowPD from '../../assets/arrowPrevB.png'


function LatePosts() {
  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
  const stagePadding = {
    paddingLeft: 600,
    paddingRight: 600,
  }
  const prevButton = (
    <button className={classNames(styles.customPrevButton, styles.sliderButton ,)}  style={{backgroundColor: isDarkMode ? '#161C24' : ''}}>
      <span classNames="visually-hidden">
        <img src={isDarkMode ? arrowP : arrowP} alt="" width='30px'  />
      </span>
    </button>
  );
  const nextButton = (
    <button className={classNames(styles.customNextButton, styles.sliderButton)} style={{ backgroundColor:isDarkMode ? '#161C24' : ''}}>
      <span classNames="visually-hidden">
        <img src={isDarkMode ? arrowN : arrowN} alt="" width='30px' />
      </span>
    </button>

  );

  return (
    <div className={`${styles.MainLatePost} ${isDarkMode ? 'dark' : styles.MainLatePost}`}>
      <div className="container">
        <h1 id={styles.h1}>Latest Posts</h1>
        <AliceCarousel buttonsDisabled={true} // Disable default buttons
          renderPrevButton={() => prevButton} // Render custom prev button
          renderNextButton={() => nextButton} // Render custom next button
          stagePadding={stagePadding}


        >


          <div className={`${styles.LatePosts} ${isDarkMode ? 'dark' : styles.LatePosts}`}>



            <a href="/blog">
              <div className={`${styles.FirstPost} }`} style={{backgroundColor : isDarkMode ? '#212B36' : 'white'}} >
                <div className={styles.Date}>
                  <p>15 Dec 2020</p>
                  <img src={Ellipse} alt="" />
                  <p>8 min read </p>
                </div>
                <div className={styles.AnyMechanical}>
                  <h1 style={{color : isDarkMode ? 'white' : '#212B36'}}>Any mechanical keyboard enthusiasts in design?</h1>
                </div>
                <div className={styles.Bottom}>
                  <img src={ImgFirstAvatar} alt="" />
                  <p style={{color : isDarkMode ? 'white' : '#212B36'}}>Maddox Fletcher</p>
                </div>
              </div>
            </a>
            <a href="/blog">
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
            </a>
            <a href="/blog">
              <div className={styles.FirstPost}  style={{backgroundColor : isDarkMode ? '#212B36' : 'white'}}>
                <div className={styles.Date}>
                  <p>19 Apr 2019</p>
                  <img src={Ellipse} alt="" />
                  <p>8 min read </p>
                </div>
                <div className={styles.AnyMechanical}>
                  <h1 style={{color : isDarkMode ? 'white' : '#212B36'}}>Any mechanical keyboard enthusiasts in design?</h1>
                </div>
                <div className={styles.Bottom}>
                  <img src={ImgThirdAvatar} alt="" />
                  <p style={{color : isDarkMode ? 'white' : '#212B36'}}>Margaret Donnelly</p>
                </div>
              </div>
            </a>
          </div>
          <div className={`${styles.LatePosts} ${isDarkMode ? 'dark' : styles.LatePosts}`}>



            <a href="/blog">
              <div className={`${styles.FirstPost} }`} style={{backgroundColor : isDarkMode ? '#212B36' : 'white'}} >
                <div className={styles.Date}>
                  <p>15 Dec 2020</p>
                  <img src={Ellipse} alt="" />
                  <p>8 min read </p>
                </div>
                <div className={styles.AnyMechanical}>
                  <h1 style={{color : isDarkMode ? 'white' : '#212B36'}}>Any mechanical keyboard enthusiasts in design?</h1>
                </div>
                <div className={styles.Bottom}>
                  <img src={ImgFirstAvatar} alt="" />
                  <p style={{color : isDarkMode ? 'white' : '#212B36'}}>Maddox Fletcher</p>
                </div>
              </div>
            </a>
            <a href="/blog">
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
            </a>
            <a href="/blog">
              <div className={styles.FirstPost}  style={{backgroundColor : isDarkMode ? '#212B36' : 'white'}}>
                <div className={styles.Date}>
                  <p>19 Apr 2019</p>
                  <img src={Ellipse} alt="" />
                  <p>8 min read </p>
                </div>
                <div className={styles.AnyMechanical}>
                  <h1 style={{color : isDarkMode ? 'white' : '#212B36'}}>Any mechanical keyboard enthusiasts in design?</h1>
                </div>
                <div className={styles.Bottom}>
                  <img src={ImgThirdAvatar} alt="" />
                  <p style={{color : isDarkMode ? 'white' : '#212B36'}}>Margaret Donnelly</p>
                </div>
              </div>
            </a>
          </div>
          <div className={`${styles.LatePosts} ${isDarkMode ? 'dark' : styles.LatePosts}`}>



            <a href="/blog">
              <div className={`${styles.FirstPost} }`} style={{backgroundColor : isDarkMode ? '#212B36' : 'white'}} >
                <div className={styles.Date}>
                  <p>15 Dec 2020</p>
                  <img src={Ellipse} alt="" />
                  <p>8 min read </p>
                </div>
                <div className={styles.AnyMechanical}>
                  <h1 style={{color : isDarkMode ? 'white' : '#212B36'}}>Any mechanical keyboard enthusiasts in design?</h1>
                </div>
                <div className={styles.Bottom}>
                  <img src={ImgFirstAvatar} alt="" />
                  <p style={{color : isDarkMode ? 'white' : '#212B36'}}>Maddox Fletcher</p>
                </div>
              </div>
            </a>
            <a href="/blog">
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
            </a>
            <a href="/blog">
              <div className={styles.FirstPost}  style={{backgroundColor : isDarkMode ? '#212B36' : 'white'}}>
                <div className={styles.Date}>
                  <p>19 Apr 2019</p>
                  <img src={Ellipse} alt="" />
                  <p>8 min read </p>
                </div>
                <div className={styles.AnyMechanical}>
                  <h1 style={{color : isDarkMode ? 'white' : '#212B36'}}>Any mechanical keyboard enthusiasts in design?</h1>
                </div>
                <div className={styles.Bottom}>
                  <img src={ImgThirdAvatar} alt="" />
                  <p style={{color : isDarkMode ? 'white' : '#212B36'}}>Margaret Donnelly</p>
                </div>
              </div>
            </a>
          </div>
          

        </AliceCarousel>
      </div>

    </div>
  );
}
export default LatePosts;
