import React from 'react';

const Search = (props) => {
  return <input
    type="text"
    className= "search-component"
    placeholder={props.placeholder || ''}
    value={props.value}
    onChange={props.onChange}
  />
}

export default Search;
