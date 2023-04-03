import css from "./CustomLink.module.css";
import { Link, useLocation } from "react-router-dom";
import { sideBarElements } from "../../../Constants";
import theme from "../../../global/theme";
import { useState } from "react";
import vector123 from '../../../assets/vector123.svg'



function CustomLink() {
  const CustomLink2 = (props) => {
    const location = useLocation();
    return (
      <Link
        className={`${css.link} ${location.pathname === props.to ? css.active : ""
          } `}
        to={props.to}
      >
        <p>{props.title}</p>
      </Link>
    );
  };
  const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
  const render = sideBarElements.map((el) => (
    <CustomLink2 key={el.title} {...el} />
  ));
  return (
    <div className={css.nav}>
      <div className={css.id}>
        <div className={css.wrapper}>
          {render}
        </div>
      </div>
      <div className={`${css.wrapper} ${css.n12}`}>
        <b href="" >All</b>
        <a href="">Branding</a>
        <a href="">Digital</a>
        <a href=""><img src={vector123} alt="" /></a>
      </div>
      <hr />
    </div>
  );
}

export default CustomLink;