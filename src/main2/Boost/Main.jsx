import Header from "../Header/Header";
import styles from "./Main.module.css";
import Free from "./images/Play.svg";
import marketing from "./images/illustration_marketing.jpg";
import theme from "../../global/theme";
import { useState } from "react";
import dark from './images/darkm.png'

function Main() {
  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
  return (
    <>
      <Header  />
      <div className="container" style={{backgroundColor: isDarkMode ? '#161C24' : 'white'}}>
        <div className={styles.Main}>
          <div className={styles.Left}>
            <p className={styles.digital}>DIGITAL MARKETING</p>
            <h1 style={{ color: isDarkMode ? 'white' : '#212b36' }}>Boosts Your Website Traffic</h1>
            <div className={styles.info}>
              <p className={styles.info1}>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.{" "}
              </p>
            </div>
            <div className={styles.bottom}>
              <button className={styles.btn} name={styles.Hover}>
                <a href="/contact" className={styles.btnn} >Try For Free</a>
              </button>
              <div className={styles.free}>
                <img src={Free} alt="" />
                <a style={{color: isDarkMode ? 'white' : '#212b36'}}>See our Work</a>
              </div>
            </div>
          </div>
          <div className={styles.Right}>
            <img src={marketing} alt="" style={{display: isDarkMode ? 'none' : 'block'}}/>
            <img src={dark} alt=""  style={{display: isDarkMode ? 'block' : 'none'}} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
