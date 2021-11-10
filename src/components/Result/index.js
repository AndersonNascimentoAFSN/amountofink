import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Title from '../Title';
import TinsQtySizes from './TinsQtySizes';

const Result = ({ areaTotal, qtyOfInk, tinsOfInk }) => (
  <div className="c-result">
    <Title title="Resultado" />
    <p className="result__paragraph">
      Área total a ser pintada:
      <span>
        { areaTotal }
        {' '}
        m²
      </span>
    </p>
    <p className="result__paragraph">
      Quantidade de tinta necessária:
      <span>
        { qtyOfInk }
        {' '}
        litro(s)
      </span>
    </p>
    <p className="result__paragraph">
      Tamanhos de latas de tintas que deves comprar:
    </p>
    {
      tinsOfInk && Object.keys(tinsOfInk).map((key, index) => (
        <TinsQtySizes
          key={ `${key}_${index}` }
          keyProps={ key }
          tinsOfInk={ tinsOfInk }
        />
      ))
    }
  </div>
);

export default Result;

Result.propTypes = {
  areaTotal: PropTypes.number,
  qtyOfInk: PropTypes.number,
  tinsOfInk: PropTypes.shape({
    18: PropTypes.number,
    3.6: PropTypes.number,
    2: PropTypes.number,
    0.5: PropTypes.number,
  }),
};

Result.defaultProps = {
  areaTotal: 0,
  qtyOfInk: 0,
  tinsOfInk: {},
};
