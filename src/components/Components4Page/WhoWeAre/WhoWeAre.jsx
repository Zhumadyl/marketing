import styles from "./WhoWeAre.module.css";
import MainImg from "./images/illustration_teams.svg";
import Header from "../../../Main2/Header/Header";
import Right from "./images/OVERLAY COLOR (3).svg"


function WhoWeAre() {
  return (
    <section className={styles.Main}>
        <div className="container">
      <div className="ForFlex">
      <div className={styles.left}>
        <img className={styles.MainImg} src={MainImg} alt="" />
      </div>
      <div className={styles.right}>
        <h4>Who We Are?</h4>
        <p>
          Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc
          fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis, molestie non,
           velit.
        </p>
        <p>
          Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere
          iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.
          Praesent venenatis metus at tortor pulvinar varius.
        </p>
        <button className={styles.btn}>
            <a>Check Our Work</a>
            <img className={styles.cursor}  src={Right} alt="" />
            </button>
        
      </div>
      </div>
      <div className={styles.BottomCards}>
        <div className={styles.CardOne}>
          <img src={1} alt="" />
          <h1>12</h1>
          <p>Years of experience</p>
        </div>
        <div className={styles.CardTwo}>
          <img src={2} alt="" />
          <h1>20</h1>
          <p>Awards</p>
        </div>
        <div className={styles.CardThree}>
          <img src={3} alt="" />
          <h1>150</h1>
          <p>Projects</p>
        </div>
        <div className={styles.CardFour}>
          <img src={4} alt="" />
          <h1>32k</h1>
          <p>Happy clients</p>
        </div>
      </div>
      </div>
    </section>
  );
}
export default WhoWeAre;
