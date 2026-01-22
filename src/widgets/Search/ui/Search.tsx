import React from 'react';
import classes from './Search.module.scss';

interface SearchProps {
  placeholder?: string; 
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Search: React.FC<SearchProps> = ({ placeholder = 'Search', value = '', onChange = () => {} }) => {
  return (
    <div className={classes.Search}>
      <input value={value} placeholder={placeholder} type="search" onChange={onChange} />
    </div>
  );
};

export default Search;