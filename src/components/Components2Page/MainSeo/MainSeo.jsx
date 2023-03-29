
import styles from "./MainSeo.module.css";
import email from "./images/OVERLAY COLOR.svg";
import Vector from "./images/iconbase.svg";
import layer from "./images/layer.svg";
import Header from "../../../Main2/Header/Header";

function MainSeo() {

  return (
    <section className={styles.OfflineSeo}>
      <Header/>
      <div className={styles.Seo}>
        <h1>Offline SEO</h1>
        <p>
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
          sapien, quis venenatis ante odio sit amet eros.
        </p>
        <div className={styles.Content}>
          <div className={styles.email}>
            <input
              type="email"
              className={styles.icon}
              placeholder="Email"
              alt=""
            />
          </div>
          <img src={layer} alt="" />
          <div className={styles.url}>
            <input
              type="text"
              className={styles.town}
              placeholder="Website URL"
              alt=""
            />
             <button className={styles.Analyse}>
        <a>Analyse</a>
      </button>
          </div>
        </div>
      </div>
     
    </section>
  );
}
export default MainSeo;
