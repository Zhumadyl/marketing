import Header from "../Header/Header";
import styles from "./Main.module.css";
import Free from "./images/Play.svg";
import marketing from "./images/illustration_marketing.jpg";

function Main() {
  return (
    <>
      <Header  />
      <div className="container">
        <div className={styles.Main}>
          <div className={styles.Left}>
            <p className={styles.digital}>Digital Marketing</p>
            <h1>Boosts Your Website Traffic</h1>
            <div className={styles.info}>
              <p className={styles.info1}>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.{" "}
              </p>
            </div>
            <div className={styles.bottom}>
              <button className={styles.btn}>
                <a href="/contact" className={styles.btnn}>Try For Free</a>
              </button>
              <div className={styles.free}>
                <img src={Free} alt="" />
                <a>See our Work</a>
              </div>
            </div>
          </div>
          <div className={styles.Right}>
            <img src={marketing} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
