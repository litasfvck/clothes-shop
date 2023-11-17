import { FC, useContext } from 'react';
import { ProductContext } from '../../store/ProductStore/store';

interface FullProductProps {}

const FullProduct: FC<FullProductProps> = () => {
  const { product } = useContext(ProductContext);

  return <div className=''>{product.title}</div>;
};

export default FullProduct;
