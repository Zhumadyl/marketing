import AliceCarousel from "react-alice-carousel";
import styles from "./Result.module.css";
import Img1 from "./images/IMG (1).svg";
import Img2 from "./images/IMG (2).svg";
import Img3 from "./images/IMG (3).svg";
import facebook from "./images/Vector1.svg";
import instagram from "./images/Vector.svg";
import In from "./images/OVERLAY COLOR.svg";
import twitter from "./images/OVERLAY COLOR1.svg";
import classNames from "classnames";
import theme from "../../../global/theme";
import leftBtn from "./imgforbutton/OVERLAY COLOR (2).svg";
import RightBtn from "./imgforbutton/OVERLAY COLOR (3).svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function Result() {
  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
  const prevButton = (
    <button
      className={classNames(styles.customPrevButton, styles.sliderButton)}
    >
      <span classNames="visually-hidden">
        <img src={leftBtn} alt="" width="15px" />
      </span>
    </button>
  );
  const nextButton = (
    <button
      className={classNames(styles.customNextButton, styles.sliderButton)}
    >
      <span classNames="visually-hidden">
        <img src={RightBtn} alt="" width="15px" />
      </span>
    </button>
  );

  return (
    <section className={`${styles.Result} ${isDarkMode ? 'dark' : styles.Result}`}>
      <div className={styles.left}>
        <div className={styles.Brief}>
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>Project Brief</h1>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>
            Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum
            libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit
            amet nibh. Phasellus viverra nulla ut metus varius laoreet.
          </p>
        </div>
        <div className={styles.HowWeWork}>
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>HoweWork</h1>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className={styles.list}>
            <ul>
              <li style={{color: isDarkMode ? 'white' : '#212B36'}}>Medical Assistant</li>
              <li style={{color: isDarkMode ? 'white' : '#212B36'}}>Web Designer</li>
              <li style={{color: isDarkMode ? 'white' : '#212B36'}}>Dog Trainer</li>
              <li style={{color: isDarkMode ? 'white' : '#212B36'}}>Nursing Assistant</li>
              <li style={{color: isDarkMode ? 'white' : '#212B36'}}>President of Sales</li>
            </ul>
          </div>
        </div>
        <div className={styles.Res}>
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>Result</h1>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className={styles.list}>
            <ul style={{color: isDarkMode ? 'white' : '#212B36'}}>
              <li>Medical Assistant</li>
              <li>Web Designer</li>
              <li>Dog Trainer</li>
              <li>Nursing Assistant</li>
              <li>President of Sales</li>
            </ul>
          </div>
        </div>
        <div className={styles.Gallery}>
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>Galleery</h1>
          <AliceCarousel
            buttonsDisabled={true} // Disable default buttons
            renderPrevButton={() => nextButton} // Render custom prev button
            renderNextButton={() => prevButton} // Render custom next button
            disableDotsControls={true}
          >
            <div className={styles.images}>
              <div className={styles.FirstImg}>
                <img className={styles.Img1} src={Img1} alt="" />
              </div>
              <div className={styles.SecongImg}>
                <img className={styles.Img2} src={Img2} alt="" />
              </div>
              <div className={styles.ThirdImg}>
                <img className={styles.Img3} src={Img3} alt="" />
              </div>
            </div>

          </AliceCarousel>
        </div>
      </div>
      <div className={styles.Right} style={{backgroundColor: isDarkMode ? 'rgba(145, 158, 171, 0.12)' : '#F9FAFB'}}>
        <div className={styles.text}>
          <a>SUMMARY</a>
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>Bank of America</h1>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>
            Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit amet
            augue.{" "}
          </p>
        </div>
        <hr />
        <div className={styles.Web}>
          <a>WEBSITE</a>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>example.com</p>
          <a>CATEGORY</a>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>SEO Optimization</p>
          <a>DATE</a>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>October 25, 2019</p>
        </div>
        <hr />
        <div className={styles.WebSites}>
          <h3 style={{color: isDarkMode ? 'white' : '#212B36'}}>Share:</h3>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={In} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Result;
