import styles from "./BlackHeader.module.css";
import logo from "./images/Logo (1).svg";
import Search from "./images/OVERLAY COLOR (6).svg";
import Glob from "./images/OVERLAY COLOR (5).svg";
import layer from "./images/layer.svg";
import "../../../global/global.css";
import Ellipse from "./images/Ellipse.svg";
import Vector from "./images/Vector.svg";
import burger from './images/burger.svg'

function BlackHeader() {
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.Header_Centr}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <a href="/">Home</a>
            <a href="">Components</a>
            <div className={styles.Pages}>
              <img src={Ellipse} alt="" />
              <a href="">Pages</a>
              <img src={Vector} alt="" />
            </div>

            <a href="">Documentation</a>
          </div>
          <div className={styles.Right}>
            <img src={burger} alt="" id={styles.burger} />
            <img src={Search} alt="" id={styles.search} />
            <img src={Glob} alt="" />
            <img src={layer} alt="" />
            <a href="">Login</a>
            <button className={styles.btn}>Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlackHeader;
