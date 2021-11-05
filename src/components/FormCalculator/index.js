import React from 'react';
import WallAreas from '../WallAreas';

const FormCalculator = () => {
  const handleSubmit = () => {

  };
  return (
    <form onSubmit={ handleSubmit }>
      <WallAreas />
      <button type="submit">Calcular</button>
    </form>
  );
};

export default FormCalculator;
