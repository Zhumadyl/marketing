import styles from "./OurStory.module.css";
import dotorange from "./dots/dotorange.svg";
import dotblue from "./dots/dotblue.svg";
import dotyellow from "./dots/dotyellow.svg";
import dotgreen from "./dots/dotgreen.svg";
import theme from "../../../global/theme";
import { useState } from "react";

function OurStory() {
  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
  return (
    <section className={styles.senior} style={{ backgroundColor: isDarkMode ? 'rgba(145, 158, 171, 0.12)' : '#F9FAFB' }}>
      <div className={styles.HowitWorks}>
        <h1 style={{ color: isDarkMode ? 'white' : '#212B36' }}>Our Story</h1>
        <p>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis.
        </p>
      </div>

      <div className={styles.Planning}>
        <img src={dotorange} alt="" />
        <hr />
        <img src={dotblue} alt="" />
        <hr />
        <img src={dotyellow} alt="" />
        <hr />
        <img src={dotgreen} alt="" />
        <hr />
      </div>
      <div className={styles.PlanningLeft}>
        <div className={styles.LeftTop}>
          <a>2020</a>
          <h1 style={{ color: isDarkMode ? 'white' : '#212B36' }}>Legal Rewiew</h1>
          <p>
            Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
            Donec mollis hendrerit risus.
          </p>
        </div>
        <div className={styles.LeftBottom}>
          <a>2018</a>
          <h1 style={{ color: isDarkMode ? 'white' : '#212B36' }}>Company Established</h1>
          <p>
            Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
            Donec mollis hendrerit risus.
          </p>
        </div>
      </div>
      <div className={styles.PlanningRight}>
        <div className={styles.RightTop}>
          <a>2021</a>
          <h1 style={{ color: isDarkMode ? 'white' : '#212B36' }}>Business Conception</h1>
          <p>
            Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
            Donec mollis hendrerit risus.
          </p>
          <div className={styles.none}>
            <a>2020</a>
            <h1 style={{ color: isDarkMode ? 'white' : '#212B36' }}>Legal Rewiew</h1>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </div>
        <div className={styles.RightBottom}>
          <a>2019</a>
          <h1 style={{ color: isDarkMode ? 'white' : '#212B36' }}>Infrastucture Design</h1>
          <p>
            Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
            Donec mollis hendrerit risus.
          </p>
          <div className={styles.none2}>
            <a>2018</a>
            <h1 style={{ color: isDarkMode ? 'white' : '#212B36' }}>Company Established</h1>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OurStory;
