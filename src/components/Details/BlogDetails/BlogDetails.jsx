
import Header from "../../../Main2/Header/Header"
import styles from "./BlogDetails.module.css"
import MainImg from "./images/IMG.jpg"
import Vector from "./images/Vector.svg"
import theme from "../../../global/theme";
import { useState } from "react";
import arrowD from '../../../assets/arrowD.svg'

function BlogDetails() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
    return (
        <div className={styles.wrp}>
            <section className={styles.main}>

                <Header />
                <div className={styles.img}>
                    <div className={styles.MainImg} ></div>
                    <div className={styles.under}  >
                        <p style={{ color: isDarkMode ? 'white' : '#212B36' }}>Home</p>
                        <img src={Vector} alt="" style={{display : isDarkMode ? 'none' : 'block'}}/>
                        <img src={arrowD} alt="" style={{display : isDarkMode ? 'block' : 'none'}}/>
                        <p style={{ color: isDarkMode ? 'white' : '#212B36' }}>Blog</p>
                        <img src={Vector} alt="" style={{display : isDarkMode ? 'none' : 'block'}}/>
                        <img src={arrowD} alt="" style={{display : isDarkMode ? 'block' : 'none'}} />
                        <a id={styles.a}>The Complete Digital Marketing Course - 12 Courses in 1</a>
                        <a id={styles.a1}>The Complete Digital Market...</a>
                    </div>
                </div>
            </section>
            <hr />
        </div>

    )
}
export default BlogDetails