import { FC } from 'react';
import { MdOutlineFavorite } from 'react-icons/md';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar.tsx';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='header-right'>
          <Link to='/'>
            <span>ATSOS</span>
          </Link>

          <SearchBar />
        </div>

        <ul>
          <li>Login</li>
          <Link to='/favourite'>
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
      </div>
    </header>
  );
};

export default Header;
