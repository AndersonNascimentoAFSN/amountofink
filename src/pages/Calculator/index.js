import React from 'react';
import './styles.css';
import { Header, Title, FormCalculator, SubTitle } from '../../components';

const Calculator = () => (
  <main>
    <Header />
    <div className="c-calculator">
      <Title title="Calculadora de Tinta" />
      <SubTitle
        subtitle="Informe as dimensões de cada
      parede da sala"
      />
      <p>
        Informe também, caso possua, a quantidade de portas
        e janelas de cada uma das paredes.
      </p>
      <FormCalculator />
    </div>
  </main>
);

export default Calculator;
