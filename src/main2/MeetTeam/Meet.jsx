import styles from "./Meet.module.css";
import FirstImg from "./images/Image Ratio.svg";
import ThreeImg from "./images/IMG.svg";
import Oval from './images/Oval.svg'
import layer from './images/layer.svg'
import SecondImg from "./images/IMGG.svg";
import OverLeft from "./images/OVERLAY COLORLeft.svg";
import OverRight from "./images/OVERLAY COLOR.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AliceCarousel from "react-alice-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";
function Meet() {
  const stagePadding = {
    paddingLeft: 100,
    paddingRight: 100,
  };
  const prevButton = (
    <button
      className={classNames(styles.customPrevButton, styles.sliderButton)}
    >
      <span classNames="visually-hidden">
        <img src={OverLeft} alt="" width="15px" />
      </span>
    </button>
  );
  const nextButton = (
    <button
      className={classNames(styles.customNextButton, styles.sliderButton)}
    >
      <span classNames="visually-hidden">
        <img src={OverRight} alt="" width="15px" />
      </span>
    </button>
  );
  const items = [
    <div className={styles.ForCarosel}>
      <div className={styles.CardOne}>
        <img src={FirstImg} alt="" />
        <h1>Eleanor Pena</h1>
        <p>UI Designer</p>
      </div>
      <div className={styles.CardTwo}>
        <img className={styles.SecondImg} src={SecondImg} alt="" />
        <h1>Ralph Edwards</h1>
        <p>Project Manager</p>
      </div>
      <div className={styles.CardThree}>
        <img className={styles.ThreeImg} src={ThreeImg} alt="" />

        <h1>Marvin McKinney</h1>
        <p>Full Stack Developer</p>
      </div>
    </div>,
    <div className={styles.ForCarosel2}>
      <div className={styles.CardOne2}>
        <img src={FirstImg} alt="" />
        <h1>Eleanor Pena</h1>
        <p>UI Designer</p>
      </div>
      <div className={styles.CardTwo}>
        <img className={styles.SecondImg} src={SecondImg} alt="" />
        <h1>Ralph Edwards</h1>
        <p>Project Manager</p>
      </div>
      <div className={styles.CardThree}>
        <img className={styles.ThreeImg} src={ThreeImg} alt="" />

        <h1>Marvin McKinney</h1>
        <p>Full Stack Developer</p>
      </div>
    </div>,
  ];
  return (
    <div className={styles.Meet}>
      <div className={styles.left}>
        <p className={styles.Team}>TEAM</p>
        <h1>Meet Our Team</h1>
        <div className={styles.info}>
          <p>
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases
          </p>
        </div>
      </div>
      <div className={styles.Right}>
        <AliceCarousel
          buttonsDisabled={true} // Disable default buttons
          renderPrevButton={() => prevButton} // Render custom prev button
          renderNextButton={() => nextButton} // Render custom next button
          stagePadding={stagePadding}
          items={items}
          disableDotsControls={true}
        ></AliceCarousel>
      </div>
      <div className={styles.dots}>
        <img src={Oval} alt="" />
        <img src={layer} alt="" />
        <img src={Oval} alt="" />
        <img src={Oval} alt="" />
      </div>
    </div>
  );
}

export default Meet;
