import { FC } from 'react';
import Categories from '../components/Categories';
import Products from './Products';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main>
      <div className='aside-title'>
        <h1>ATSOS</h1>
        <h2>Его designs могут носить люди любого shape, size</h2>
        <h3>Смотря какой fabric</h3>
      </div>
      <aside>
        <Categories />
      </aside>
      <section>
        <div className='sort-settings'>
          <ul>
            <li>Sort</li>
            <li>Brand</li>
            <li>Season</li>
            <li>Collection</li>
            <li>Price-Range</li>
          </ul>
        </div>
        <Products />
      </section>

      <aside>aside2</aside>
    </main>
  );
};

export default Home;
