import React from 'react';
import WallAreas from '../WallAreas';
import DoorsOrWindows from '../DoorsOrWindows';

const FormCalculator = () => {
  const handleSubmit = () => {

  };
  return (
    <form onSubmit={ handleSubmit }>
      <WallAreas />
      <DoorsOrWindows />
      <button type="submit">Calcular</button>
    </form>
  );
};

export default FormCalculator;
