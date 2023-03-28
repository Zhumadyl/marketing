
import Header from "../../../Main2/Header/Header"
import styles from "./ProjectBrief.module.css"
import Vector from "./images/Vector.svg"
function ProjecBrief(){
    return(
        <section className={styles.main}>
            
        <Header/>
        <div className={styles.img}>
            <div className={styles.MainImg} ></div>
            <div className={styles.under}  >
        <p>Home</p>
        <img src={Vector} alt="" />
        <p>Case Studies</p>
        <img src={Vector} alt="" />
        <a>Bank of America</a>

        </div>
        </div>
      
       
       
        </section>

    )
}
export default ProjecBrief