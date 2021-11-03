import React from 'react';
import SubTitle from '../SubTitle';

const DoorsOrWindows = () => (
  <div>
    <SubTitle subtitle="Caso possua, informe a quantidade de portas e/ou janelas" />
    <label htmlFor="door">
      quantidade de portas:
      <input type="number" id="door" />
    </label>

    <label htmlFor="window">
      quantidade de janelas:
      <input type="number" id="window" />
    </label>
  </div>
);

export default DoorsOrWindows;
