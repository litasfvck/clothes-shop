import { FC } from 'react';

interface CategoriesProps {}

const categories = [
  'Shoes',
  'Socks',
  'T-shirts',
  'Hoodies',
  'Business suit',
  'Dripski',
];

const Categories: FC<CategoriesProps> = () => {
  return (
    <div className='categories'>
      <ul>
        {categories.map((cat) => (
          <li>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
