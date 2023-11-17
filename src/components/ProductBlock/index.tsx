import { MdOutlineFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FC, useContext } from 'react';
import { IProduct } from '../../types';
import { ProductContext } from '../../store/ProductStore/store';

interface ProductBlockProps {
  product: IProduct;
}

const ProductBlock: FC<ProductBlockProps> = ({ product }) => {
  const { products, dispatch } = useContext(ProductContext);

  const handleClick = () => {
    const x = products.find((p) => p.id === product.id);
    dispatch({ product: x });
  };

  return (
    <Link to={`/product`}>
      <div onClick={handleClick} className='product-container'>
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
    </Link>
  );
};
export default ProductBlock;
