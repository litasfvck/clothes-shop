import { FC } from 'react';

interface CategoriesProps {}

const categories = [
  'Shoes',
  'Socks',
  'T-shirts',
  'Hoodies',
  'Business suit',
  'Dripski',
  'Polo',
];

const Categories: FC<CategoriesProps> = () => {
  return (
    <div className='categories' key='1'>
      {categories.map((cat, index) => (
        <div className='category' key={index}>
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Categories;
