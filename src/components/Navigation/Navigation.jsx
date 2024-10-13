import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(
    s.link,
    isActive && s.activeLink
  ); /* це помічник бібліотеки, допомагає додати стилі до сторінки */
};

const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <nav className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
