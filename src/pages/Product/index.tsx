import { FunctionComponent } from 'react';
// import ProductBlock from '../../components/ProductBlock';

interface ProductProps {}

const Product: FunctionComponent<ProductProps> = () => {
  return (
    <section>
      <div className='wrapper-product'>
        {/* <ProductBlock product={undefined} /> */}
        Full Product
      </div>
    </section>
  );
};

export default Product;
