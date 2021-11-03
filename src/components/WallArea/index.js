import React, { useState } from 'react';

const WallArea = () => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  const handleArea = ({ target: { value, name } }) => {
    if (name === 'height') {
      setHeight(value);
      return;
    }
    setWidth(value);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Altura(m)"
        name="height"
        onChange={ handleArea }
        value={ height }
      />
      <input
        type="number"
        placeholder="Largura(m)"
        name="width"
        onChange={ handleArea }
        value={ width }
      />
    </div>
  );
};

export default WallArea;
