import styles from "./WhoWeAre.module.css";
import MainImg from "./images/illustration_teams.svg";
import Header from "../../../Main2/Header/Header";
import Right from "./images/OVERLAY COLOR (3).svg"
import CardOneImg from "./imagesforcards/First.svg"
import CardTwoImg from "./imagesforcards/Second.svg"
import CardThreeImg from "./imagesforcards/Third.svg"
import CardFourImg from "./imagesforcards/Fourth.svg"
import theme from "../../../global/theme";
import { useState } from "react";
import arrowD from '../../../assets/arrowD.svg'

function WhoWeAre() {
  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
  return (
    <section className={styles.Main}>
        <div className="container">
      <div className="ForFlex">
      <div className={styles.left}>
        <img className={styles.MainImg} src={MainImg} alt="" />
      </div>
      <div className={styles.right}>
        <h4 style={{color: isDarkMode ? 'white' : '#212B36'}}>Who We Are?</h4>
        <p>
          Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc
          fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis, molestie non,
           velit.
        </p>
        <p>
          Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere
          iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.
          Praesent venenatis metus at tortor pulvinar varius.
        </p>
        <button className={styles.btn}>
            <a href="/caseStudies" style={{color: isDarkMode ? 'white' : '#212B36'}}>Check Our Work</a>
            <img className={styles.cursor}  src={Right} alt="" style={{display : isDarkMode ? 'none' : 'inline'}}/>
            <img className={styles.cursor}  src={arrowD} alt="" style={{display : isDarkMode ? 'inline' : 'none'}}/>
            </button>
        
      </div>
      </div>
      <div className={styles.BottomCards}>
        <div className={styles.CardOne}>
          <img src={CardOneImg} alt="" />
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>12</h1>
          <p>Years of experience</p>
        </div>
        <div className={styles.CardTwo}>
          <img src={CardTwoImg} alt="" />
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>20</h1>
          <p>Awards</p>
        </div>
        <div className={styles.CardThree}>
          <img src={CardThreeImg} alt="" />
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>150</h1>
          <p>Projects</p>
        </div>
        <div className={styles.CardFour}>
          <img src={CardFourImg} alt="" />
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>32k</h1>
          <p>Happy clients</p>
        </div>
      </div>
      </div>
    </section>
  );
}
export default WhoWeAre;
