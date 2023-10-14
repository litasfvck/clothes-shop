import { FC } from 'react';
import ProductBlock from '../components/ProductBlock';
import { products } from '../data';

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
  return (
    <div className='products-wrapper'>
      {products.map((p) => (
        <ProductBlock product={p} />
      ))}
    </div>
  );
};

export default Products;
