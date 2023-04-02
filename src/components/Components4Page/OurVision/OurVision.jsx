import styles from "./OurVision.module.css"
import Player from "./images/Player.svg"



function OurVis() {
    return (
        <section className={styles.MainVision}>
            <div className={styles.Vision}>
                <h1>Our Vision</h1>
                <img className={styles.Player} src={Player} alt="" />
                <p>Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada. </p>
            </div>

        </section>

    )
}
export default OurVis