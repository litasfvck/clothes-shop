import { FC, useContext, useEffect, useState } from 'react';
import Categories from '../../components/Categories';
import ProductBlock from '../../components/ProductBlock';

import { useProducts } from '../../hooks/useProducts';
import { ProductContext } from '../../store/ProductStore/store';
import { IProduct } from '../../types';
import axios, { AxiosError } from 'axios';
// import { useProductContext } from '../../store/ProductStore/store';
// import { useProductContext } from '../../store/ProductStore/store';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { products, loading, error } = useProducts();

  // const [categoryId, setCategoryId] = useState(0);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');

  // const { products, categoryId, dispatch } = useContext(ProductContext);

  // const fetchProducts = async () => {
  //   try {
  //     setError('');
  //     setLoading(true);
  //     const { data } = await axios.get<IProduct[]>(
  //       'https://652c1176d0d1df5273ef1c48.mockapi.io/items?category=' +
  //         categoryId
  //     );
  //     dispatch({ products: data }); // <==> setProducts(data)
  //     setLoading(false);
  //   } catch (e: unknown) {
  //     const error = e as AxiosError;
  //     setLoading(false);
  //     setError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, [categoryId]);

  // const changeCategory = (id: number) => {
  //   dispatch({});
  // };

  return (
    <main>
      <div className='aside-title'>
        <h1>ATSOS</h1>
        <h2>Его designs могут носить люди любого shape, size</h2>
        <h3>Смотря какой fabric</h3>
      </div>

      <Categories
      // value={categoryId}
      // onChangeCategory={(id) => changeCategory(id)}
      />

      <section>
        {loading && <p>Loading ... </p>}
        {error && <p>{error}</p>}
        <div className='wrapper-products'>
          {products
            // .filter((product) => {
            //   return query.toLowerCase() === ''
            //     ? product
            //     : product.title.toLocaleLowerCase().includes(query);
            // })
            .map((product) => (
              <ProductBlock product={product} key={product.id} />
            ))}
        </div>
      </section>

      {/* <aside>aside2</aside> */}
    </main>
  );
};

export default Home;
