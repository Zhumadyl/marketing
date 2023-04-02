import styles from "./MainSeo.module.css";
import email from "./images/OVERLAY COLOR.svg";
import Vector from "./images/iconbase.svg";
import layer from "./images/layer.svg";
import Header from "../../../Main2/Header/Header";
import BlackHeader from '../../Components2Page/BlackHeader/BlackHeader'
function MainSeo() {

  return (
    <section className={styles.OfflineSeo}>
      <br className={styles.br} />
      <BlackHeader />
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
        
        <div className={styles.Content2}>
          <form class={styles.inline}>
            <div class={styles.inputicons}>
              <i class="fa fa-user icon"></i>
              <input class={styles.inputfield} type="text" placeholder="Email" />
              <i class="fa fa-envelope icon">
                <img src={email} alt="" />
              </i>
              <br />
              <br />
              <input class={styles.inputfield} type="text" placeholder="Website URL" />
              <i class="fa fa-phone icon">
                <img src={Vector} alt="" />
              </i>
            </div>
          </form>
          <button className={styles.Analyse}>
              <a>Analyse</a>
            </button>
        </div>
        
      </div>

    </section>
  );
}
export default MainSeo;
