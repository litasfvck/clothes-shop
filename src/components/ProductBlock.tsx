import { FC } from 'react';
import { IProduct } from '../modals';
import { MdOutlineFavorite } from 'react-icons/md';

interface ProductBlockProps {
  product: IProduct;
}

const ProductBlock: FC<ProductBlockProps> = ({ product }) => {
  return (
    <div className='product-container'>
      <img src={product.image} alt='img' />
      <div className='info'>
        <div className='quick-info'>
          <h4>{product.title}</h4>
          <h5>Price: {product.price} $</h5>
        </div>

        <span>
          <MdOutlineFavorite style={{ width: '25px', height: '25px' }} />
        </span>
      </div>
    </div>
  );
};

export default ProductBlock;
