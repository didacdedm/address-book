import React from 'react';

const SearchBox = (props) => (
    <div>
        <input 
            type="text"
            placeholder="Ingresa lo que quieres buscar" 
            value={props.value}
            onChange={props.onChange} 
        />
    </div>
);

export default SearchBox;