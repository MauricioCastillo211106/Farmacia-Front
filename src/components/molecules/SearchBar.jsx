import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <Input type="text" placeholder="Buscar" />
      <Button>Buscar</Button>
    </div>
  );
};

export default SearchBar;
