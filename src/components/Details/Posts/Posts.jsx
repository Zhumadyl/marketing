import styles from "./Posts.module.css";
import RandomAdult from "./images/img (4).svg";
import Like from "./images/IconButton (1).svg";
import Share from "./images/OVERLAY COLOR (4).svg";
import IMG from "./images/IMG1.svg";
import IMGTWO from "./images/IMG.svg";
import global from "../../../global/global.css";
import quotes from "./images/Vector.svg";
import facebook from "./images/OVERLAY COLOR1.svg";
import instagram from "./images/OVERLAY COLOR2.svg";
import LinkedIn from "./images/OVERLAY COLOR3.svg";
import twitter from "./images/OVERLAY COLOR.svg";
import button1 from "./images/Button.svg";
import button2 from "./images/Button2.svg";
import button3 from "./images/Button3.svg";
import button4 from "./images/Button4.svg";
import Henry from "./images/imgg.svg";
import theme from "../../../global/theme";
import { useState } from "react";

function Posts() {
  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);

  return (
    <section className={styles.Posts}>
      <div className={styles.Paragraph}>
        <a>8 minutes read</a>
        <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>The Complete Digital Marketing Course - 12 Courses in 1</h1>
        <h2 style={{color: isDarkMode ? 'white' : '#212B36'}}>
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh.
        </h2>
      </div>
      <hr className={styles.topline} />.
      <div className={styles.Post}>
        <div className={styles.left}>
          <img src={RandomAdult} alt="" />
          <div className={styles.text}>
            <p style={{color: isDarkMode ? 'white' : '#212B36'}}>Jane Cooper</p>
            <a>February 28, 2018</a>
          </div>
        </div>
        <div className={styles.right}>
          
          <img src={Share} alt="" />
          <img src={Like} alt="" />
        </div>
      </div>
      <hr className={styles.bottomline} />
      <div className={styles.titles}>
        <div className={styles.TextOne}>
          <h3 style={{color: isDarkMode ? 'white' : '#212B36'}}>P</h3>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>
            ellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
            venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh.
          </p>
        </div>
        <div className={styles.BottomText} style={{color: isDarkMode ? 'white' : '#212B36'}}>
          Donec posuere vulputate arcu. Quisque rutrum.
        </div>
        <div className={styles.TextTwo}>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
        </div>
        <div className={styles.TextThree}>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
            ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh.
          </p>
        </div>
      </div>
      <div className={styles.Curabitur}>
        <img className={styles.IMG} src={IMG} alt="" />
        <div className={styles.TitleTwo}>
          <h4 style={{color: isDarkMode ? 'white' : '#212B36'}}>Curabitur suscipit suscipit tellus</h4>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
          <h4 style={{color: isDarkMode ? 'white' : '#212B36'}}>Nullam accumsan lorem in</h4>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
          <div className={styles.flex}>
            <img src={quotes} alt="" />
            <h5 style={{color: isDarkMode ? 'white' : '#212B36'}}>
              Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
              aliquam leo.
            </h5>
          </div>
        </div>
        <img className={styles.IMGTWO} src={IMGTWO} alt="" />
        <div className={styles.Text}>
          <div className={styles.TextOne}  id={styles.id}>
            <p style={{color: isDarkMode ? 'white' : '#212B36'}}>
              Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
              aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
              mauris at ligula.
            </p>
          </div>
          <div className={styles.TextTwo}>
            <p style={{color: isDarkMode ? 'white' : '#212B36'}}  id={styles.id}>
              Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
              ac venenatis condimentum, sem libero volutpat nibh, nec
              pellentesque velit pede quis nunc. Phasellus viverra nulla ut
              metus varius laoreet. Praesent egestas tristique nibh.
            </p>
          </div>
          <div className={styles.TextThree} >
            <p style={{color: isDarkMode ? 'white' : '#212B36'}}  id={styles.id}>
              Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
              aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
              mauris at ligula
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Btns}>
        <div className={styles.btns}>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>Tags:</p>
          <div className={styles.rightbtn}>
            <button classNames={styles.btn7}>Marketing</button>
            <button classNames={styles.btn6}>Development</button>
            <button className={styles.btn3}>HR & Recruting</button>
            <button className={styles.btn4}>Design</button>
            <button className={styles.btn5}>Management</button>
          </div>
        </div>
        <div className={styles.Social}>
          <p style={{color: isDarkMode ? 'white' : '#212B36'}}>Share:</p>
          <div className={styles.Socialbtn}>
            <div><img src={button1} alt="" width='100px'/></div>
            <div><img src={button2} alt="" /></div>
            <div><img src={button3} alt="" /></div>
            <div><img src={button4} alt="" /></div>
          </div>
        </div>
      </div>
      <hr className={styles.bottom}/>
      <div className={styles.comment}>
        <div className={styles.Soc}>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={twitter} alt="" />
        </div>
        <div className={styles.imgadult}>
          <img src={Henry} alt="" />
        </div>
        <div className={styles.righttext}>
          <h2 style={{color: isDarkMode ? 'white' : '#212B36'}}>Courtney Henry</h2>
          <p style={{color: isDarkMode ? '#919EAB' : '#637381'}} >Curator of Marketing Course</p>
          <p style={{color: isDarkMode ? '#919EAB' : '#637381'}} id={styles.p}>
            Integer tincidunt. Nullam dictum felis eu pede mollis pretium.
            Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
            nisi, condimentum viverra felis nunc et lorem..
          </p>
          <a>Member since Mar 15, 2021</a>
        </div>
      </div>
      <hr className={styles.end}/>
    </section>
  );
}
export default Posts;
