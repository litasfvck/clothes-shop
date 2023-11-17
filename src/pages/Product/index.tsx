import { FunctionComponent } from 'react';
import { useProducts } from '../../hooks/useProducts';
import FullProduct from '../../components/FullProduct';
// import ProductBlock from '../../components/ProductBlock';

interface ProductProps {}

const Product: FunctionComponent<ProductProps> = () => {
  // const { products } = useProducts();

  return (
    <section>
      <div className='wrapper-product'>
        <FullProduct />
      </div>
    </section>
  );
};

export default Product;
