import { FC } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-right">
          <Link to="/">
            <span>ATSOS</span>
          </Link>
          <div className="header-search">
            <input placeholder="Search ... " />
            <button>
              <CgSearch style={{ width: "15px", height: "15px" }} />
            </button>
          </div>
        </div>

        <ul>
          <li>Login</li>
          <Link to="/favorite">
            <li>
              <MdOutlineFavorite style={{ width: "30px", height: "30px" }} />
            </li>
          </Link>

          <Link to="/cart">
            <li>
              <PiShoppingCartSimple style={{ width: "30px", height: "30px" }} />
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
