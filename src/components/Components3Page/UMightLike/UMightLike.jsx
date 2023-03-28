import styles from "./UMightLike.module.css";
import CardOne from "./images/IMG.jpg";
import CardTwo from "./images/IMG2.jpg";
import CardThird from "./images/IMG3.jpg";
import OVERLAYCOLOR from "./images/OVERLAY COLOR.svg";

function MightLike() {
  return (
    <section className={styles.MightLike}>
      <div className="container">
        <div className={styles.top}>
          <h1>You Might Like</h1>
          <div className={styles.right}>
            <a>View All</a>
            <img src={OVERLAYCOLOR} alt="" />
          </div>
        </div>
        <div className={styles.ForFlex}>
          <div className={styles.CardOne}>
            <img className={styles.CardOneImg} src={CardOne} alt="" />
            <a>MARKETING</a>
            <h3>Believing These 7 Myths About Event Keeps You From Growing</h3>
          </div>

          <div className={styles.CardTwo}>
            <img className={styles.CardOneImg} src={CardTwo} alt="" />
            <a>SEO</a>
            <h3>Don't Waste Time! 7 Facts Until You Reach Your Event</h3>
          </div>

          <div className={styles.CardThird}>
            <img className={styles.CardOneImg} src={CardThird} alt="" />
            <a>SEO</a>
            <h3>7 Places To Get Deals On Event</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MightLike;
