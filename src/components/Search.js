import React from 'react';

const Search = (props) => {
  return <input type="text" value={props.value} onChange={props.onChange}/>
}

export default Search;
