import styles from "./Header.module.css";
import logo from "./images/Logo.svg";
import Search from "./images/OVERLAY COLOR.svg";
import Glob from "./images/IconButton.svg";
import layer from "./images/layer.svg";
import "../../global/global.css";
import Ellipse from "./images/Ellipse.svg";
import burger from '../../assets/iconbase.png'
import Vector from "./images/Vector.svg";
function Header() {
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
            <img src={burger} alt=""  id={styles.burger}/>
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
export default Header;