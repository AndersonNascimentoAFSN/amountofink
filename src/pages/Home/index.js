import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Title } from '../../components';

const Home = () => (
  <div>
    <Header />
    <Title title="Calculadora de Tinta" />
    <p>
      Quer saber o quanto de tinta você gastará na sua sala?
      Deixe esse trabalho com nós e preocupe-se com a pintura.
    </p>
    <Link to="/calculator">Faça o calculo agora!</Link>
  </div>
);

export default Home;
