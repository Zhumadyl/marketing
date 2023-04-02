import styles from "./Core.module.css"
import CardOneImg from "./images/Vector.svg"
import CardTwoImg from "./images/Vector2.svg"
import CardThreeImg from "./images/Vector3.svg"
import CardFourImg from "./images/Vector4.svg"
import theme from "../../../global/theme";
import { useState } from "react"


function OurCore() {
  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
  return (
    <section className={styles.OurCore}>

      <h1 style={{color: isDarkMode ? 'white' : '#212B36'}} >Our Core Values</h1>
      <div className={styles.Cards}>
        <div className={styles.CardOne}>
          <img className={styles.CardOneImg} src={CardOneImg} alt="" />
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>Customer Satisfaction</h1>
          <p>Aenean urna dictum adipiscing nec, cras quisque.</p>
        </div>
        <div className={styles.CardTwo}>
          <img src={CardTwoImg} alt="" />
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>Transparency</h1>
          <p>Aenean urna dictum adipiscing nec, cras quisque.</p>
        </div>
        <div className={styles.CardThree}>
          <img src={CardThreeImg} alt="" />
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>Reputation</h1>
          <p>Aenean urna dictum adipiscing nec, cras quisque.</p>
        </div>
        <div className={styles.CardFour}>
          <img src={CardFourImg} alt="" />
          <h1 style={{color: isDarkMode ? 'white' : '#212B36'}}>Cooperation</h1>
          <p>Aenean urna dictum adipiscing nec, cras quisque.</p>
        </div>

      </div>




    </section>

  )
}
export default OurCore