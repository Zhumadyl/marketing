import styles from "./OurClients.module.css";
import spotify from "./images/brand_color_spotify.svg";
import slack from "./images/slack.svg";
import netflix from "./images/brand_color_netflix.svg";
import microsoft from "./images/brand_color_microsoft.svg";
import video from "./images/brand_color_vimeo.svg";
import airhub from "./images/brand_color_airbnb.svg";
import google from "./images/Google.svg";
import tripadvis from "./images/Tripadvisior.svg";
import theme from "../../../global/theme";
import { useState } from "react";

function OurClients() {
  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);

  return (
    <div className={styles.OurClients}>
      <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>Our Clients</h1>
      <div className={styles.Clients}>
        <div className={styles.img1}>
          <img src={spotify} alt="" />
          <img src={slack} alt="" />
          <img src={netflix} alt="" />
          <img src={microsoft} alt="" />
        </div>
        <div className={styles.img2}>
          <img src={video} alt="" />
          <img src={airhub} alt="" />
          <img src={google} alt="" />
          <img src={tripadvis} alt="" />
        </div>
      </div>
    </div>
  );
}
export default OurClients;
