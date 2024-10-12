import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.activeLink); /* це помічник бібліотеки, допомагає додати стилі до сторінки */
};

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div>Rouling</div>
      <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
