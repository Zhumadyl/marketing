import theme from "../../../global/theme";
import Header from "../../../Main2/Header/Header"
import styles from "./ProjectBrief.module.css"
import Vector from "./images/Vector.svg"
import arrowD from '../../../assets/arrowD.svg'
import { useState } from "react";
function ProjecBrief() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
    return (
        <section className={styles.main}>
            <Header />
            <div className={styles.img}>
                <div className={styles.MainImg} ></div>
                <div className={styles.under}  >
                    <a href="/">
                        <p style={{ color: isDarkMode ? '#FFFFFF' : '#212B36' }}>Home</p>
                    </a>
                    <img src={Vector} alt="" style={{display: isDarkMode ? 'none' : 'block'}}/>
                    <img src={arrowD} alt="" style={{display: isDarkMode ? 'block' : 'none'}}/>
                    <a href="/caseStudies">
                        <p style={{ color: isDarkMode ? '#FFFFFF' : '#212B36' }}>Case Studies</p>
                    </a>
                    <img src={Vector} alt="" style={{display: isDarkMode ? 'none' : 'block'}}/>
                    <img src={arrowD} alt="" style={{display: isDarkMode ? 'block' : 'none'}} />
                    <a>Bank of America</a>

                </div>
            </div>



        </section>

    )
}
export default ProjecBrief