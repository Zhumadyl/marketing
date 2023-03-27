import css from "./CustomLink.module.css";
import { Link, useLocation } from "react-router-dom";
import { sideBarElements } from "../../Constants";


const CustomLink2 = (props) => {
  const location = useLocation();
  return (
    <Link
      className={`${css.link} ${
        location.pathname === props.to ? css.active : ""
      }`}
      to={props.to}
    >
      <p>{props.title}</p>
    </Link>
  );
};

function CustomLink() {
  const render = sideBarElements.map((el) => (
    <CustomLink2 key={el.title} {...el} />
  ));
  return (
    <div className={css.wrapper}>
      {render}
    </div>
  );
}

export default CustomLink;