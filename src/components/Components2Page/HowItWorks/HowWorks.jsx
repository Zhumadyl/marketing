import styles from "./HowWorks.module.css";
import dotorange from "./dots/dotorange.svg";
import dotblue from "./dots/dotblue.svg";
import dotyellow from "./dots/dotyellow.svg";
import dotgreen from "./dots/dotgreen.svg";

function HowWorks() {
  return (
    <section className={styles.senior}>
      <div className={styles.HowitWorks}>
        <h1>How It Works</h1>
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
          <a>STEP 2</a>
          <h1>Research</h1>
          <p>
            Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
            Donec mollis hendrerit risus.
          </p>
        </div>
        <div className={styles.LeftBottom}>
          <a>STEP 4</a>
          <h1>Results</h1>
          <p>
            Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
            Donec mollis hendrerit risus.
          </p>

        </div>
      </div>
      <div className={styles.PlanningRight}>
        <div className={styles.RightTop}>
          <a>STEP 1</a>
          <h1>Planning</h1>
          <p>
            Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
            Donec mollis hendrerit risus.
          </p>
          <div className={styles.none}>
            <a>STEP 2</a>
            <h1>Research</h1>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </div>
        <div className={styles.RightBottom}>

          <div className={styles.none2}>
            <a>STEP 4</a>
            <h1>Results</h1>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
          <a>STEP 3</a>
          <h1>Optimizing</h1>
          <p>
            Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
            Donec mollis hendrerit risus.
          </p>
        </div>
      </div>
    </section>
  );
}
export default HowWorks;
