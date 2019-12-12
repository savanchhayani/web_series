import React from 'react';

const Search = (props) => {
  return <input
    type="text"
    className= "search-component"
    value={props.value}
    onChange={props.onChange}
  />
}

export default Search;
