import React from 'react';

const myStyle = {
  color: 'black',
  fontFamily: 'sans-serif',
  fontSize: '50px',
  backgroundColor: '#0065',
};

const otherStyle = {
  color: 'white',
  backgroundColor: 'blue',
  fontFamily: 'sans-serif',
  fontSize: '50px',
};

let condition = true;

const ThirdComponent = () => {
  return (
    <h3 style={condition ? myStyle : otherStyle}>
      {condition
        ? 'MERCI POUR VOTRE VISITE'
        : 'The component background is blue'}
    </h3>
  );
};

export default ThirdComponent;

