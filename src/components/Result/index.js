import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';

const Result = ({ areaTotal, qtyOfInk, tinsOfInk }) => (
  <div>
    <Title title="Resultado" />
    <p>
      Área total a ser pintada:
      <span>
        { areaTotal }
        {' '}
        m²
      </span>
    </p>
    <p>
      Quantidade de tinta necessária:
      <span>
        { qtyOfInk }
        {' '}
        litro(s)
      </span>
    </p>
    <p>
      Tamanhos de latas de tintas que deves comprar:
    </p>
    {
      tinsOfInk && Object.keys(tinsOfInk).map((key, index) => (
        <div key={ `${key}_${index}` }>
          <p>
            <span>Tamanho da lata:</span>
            <span>
              { key }
              {' '}
              L
            </span>
          </p>
          <p>
            <span>Quantidade de latas:</span>
            <span>{ tinsOfInk[key] }</span>
          </p>
        </div>
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
