import { FC } from 'react';

interface FavouriteProps {}

const Favourite: FC<FavouriteProps> = () => {
  return (
    <section>
      <div className='wrapper-favourite'>No Favourites</div>
    </section>
  );
};

export default Favourite;
