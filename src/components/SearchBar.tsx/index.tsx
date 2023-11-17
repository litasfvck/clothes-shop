import { ChangeEvent, FunctionComponent, useState } from 'react';
import { CgSearch } from 'react-icons/cg';

interface SearchBarProps {}

const SearchBar: FunctionComponent<SearchBarProps> = () => {
  const [query, setQuery] = useState<string>('');

  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className='header-search'>
      <input placeholder='Search ... ' value={query} onChange={onChangeQuery} />
      <button>
        <CgSearch style={{ width: '15px', height: '15px' }} />
      </button>
    </div>
  );
};

export default SearchBar;
