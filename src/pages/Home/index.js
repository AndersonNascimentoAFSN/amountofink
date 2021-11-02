import React from 'react';
import { Header, Title } from '../../components';

const Home = () => (
  <div>
    <Header />
    <Title title="Calculadora de Tinta" />
    <p>
      Quer saber o quanto de tinta você gastará na sua sala?
      Deixe esse trabalho com nós e preocupe-se com a pintura.
    </p>
    <a href="#Calculator">Faça o calculo agora!</a>
  </div>
);

export default Home;
