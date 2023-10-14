import { FC } from 'react';
import { MdOutlineFavorite } from 'react-icons/md';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { CgSearch } from 'react-icons/cg';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <Link to='/'>
        <span>ATSOS</span>
      </Link>
      <div className='search'>
        <input placeholder='Search ... ' />
        <button>
          <CgSearch style={{ width: '15px', height: '15px' }} />
        </button>
      </div>

      <ul>
        <li>Login</li>
        <Link to='/favorite'>
          <li>
            <MdOutlineFavorite style={{ width: '30px', height: '30px' }} />
          </li>
        </Link>

        <Link to='/cart'>
          <li>
            <PiShoppingCartSimple style={{ width: '30px', height: '30px' }} />
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
