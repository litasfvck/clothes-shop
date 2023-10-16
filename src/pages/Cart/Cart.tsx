import { FC } from 'react';

interface CartProps {}

const Cart: FC<CartProps> = () => {
  return (
    <section>
      <div className='wrapper-cart'>Your cart is empty</div>
    </section>
  );
};

export default Cart;
