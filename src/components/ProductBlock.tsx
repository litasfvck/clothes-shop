import { FC } from 'react';
import { IProduct } from '../modals';

interface ProductBlockProps {
  product: IProduct;
}

const ProductBlock: FC<ProductBlockProps> = ({ product }) => {
  return (
    <div className='product-container'>
      <img src={product.image} alt={product.image} />
      <div className='info'>
        <h3>{product.title}</h3>
        <h4>Price: {product.price} $</h4>
        <span>Like</span>
      </div>
    </div>
  );
};

export default ProductBlock;
