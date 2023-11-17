import { FC, useContext, useEffect } from 'react';
import { ProductContext } from '../../store/ProductStore/store';
import axios from 'axios';
import { IProduct } from '../../types';

const categories = [
  'Shoes',
  'Socks',
  'T-shirts',
  'Hoodies',
  'Business suit',
  'Dripski',
  'Polo',
];

const Categories: FC = () => {
  const { categoryId, dispatch } = useContext(ProductContext);

  const fetchProductsByCategory = async () => {
    const { data } = await axios.get<IProduct[]>(
      'https://652c1176d0d1df5273ef1c48.mockapi.io/items?category=' + categoryId
    );
    dispatch({ products: data }); // <==> setProducts(data)
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, [categoryId]);

  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => {
              dispatch({ categoryId: index });
            }}
            className={categoryId === index ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
