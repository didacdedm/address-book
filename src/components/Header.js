import React from 'react';

const Header = (props)=>(
  // React.createElement('div', {className:'text-center'}, 'Hola Mundo')
  <h1>{props.title}</h1>
);


export default Header;