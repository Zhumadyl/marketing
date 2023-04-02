import React from "react";
import theme from "../../global/theme";
import styles from "./Header.module.css";
import logo from "./images/Logo.svg";
import logod from "./images/LogoD.svg";
import Search from "./images/OVERLAY COLOR.svg";
import Glob from "./images/IconButton.svg";
import layer from "./images/layer.svg";
import Ellipse from "./images/Ellipse.svg";
import burger from '../../assets/iconbase.png'
import Vector from "./images/Vector.svg";
import { useState } from "react";
import add from './images/add.svg'
import searchd from './images/searchd.svg'
import mapd from './images/global.svg'

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);

  return (
    <div className={`${styles.Header} ${isDarkMode ? styles.Header_dark : styles.Header}`}>
      <div className={`${'container'} ${isDarkMode ? styles.Header_dark : 'container'}`}>
        <div className={styles.Header_Centr}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <a href="/">
                <img src={logo} alt="" style={{ display: isDarkMode ? "none" : "block" }} />
                <img src={logod} alt="" style={{ display: isDarkMode ? "block" : "none" }} />
              </a>
            </div>
            <a href="/">Home</a>
            <a href="">Components</a>
            <div className={styles.Pages}>
              <img src={Ellipse} alt="" />
              <a href="">Pages</a>
              <img src={Vector} alt="" />
            </div>

            <a href="/about">Documentation</a>
          </div>
          <div className={styles.Right}>
            <img src={burger} alt="" id={styles.burger} />
            <img src={Search} alt="" id={styles.search} style={{ display: isDarkMode ? 'none' : 'block' }} />
            <img src={searchd} id={styles.search} style={{ display: isDarkMode ? 'block' : 'none' }} alt="123" />
            <div id={styles.search1} >
              <img src={Glob} alt="" style={{ display: isDarkMode ? 'none' : 'block' }} />
              <img src={mapd} alt="" style={{ display: isDarkMode ? 'block' : 'none' }} />
            </div>
            <img src={layer} alt="" />
            <a href="/contact">Login</a>
            <a href="/services">
              <button className={styles.btn}>Join Us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;