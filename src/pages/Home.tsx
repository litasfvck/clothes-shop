import { FC, useEffect, useState } from 'react';
import Categories from '../components/Categories';
import ProductBlock from '../components/ProductBlock';
import axios, { AxiosError } from 'axios';
import { IProduct } from '../types';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      setError('');
      setLoading(true);
      const { data } = await axios.get<IProduct[]>(
        'https://652c1176d0d1df5273ef1c48.mockapi.io/items'
      );
      setProducts(data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <div className='aside-title'>
        <h1>ATSOS</h1>
        <h2>Его designs могут носить люди любого shape, size</h2>
        <h3>Смотря какой fabric</h3>
      </div>

      <Categories />

      <section>
        {loading && <p>Loading ... </p>}
        {error && <p>{error}</p>}
        <div className='products-wrapper'>
          {products.map((p, index) => (
            <ProductBlock product={p} key={index} />
          ))}
        </div>
      </section>

      <aside>aside2</aside>
    </main>
  );
};

export default Home;
