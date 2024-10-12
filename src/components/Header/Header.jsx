import { Link } from "react-router-dom";
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.wraper}>
            <div>Rouling</div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
            </div>
        </div>
    );
};

export default Header;