import React from 'react';
import PropTypes from 'prop-types';

const TinsQtySizes = ({ keyProps, tinsOfInk }) => (
  <div>
    <ul className="result__paragraph">
      <li>
        <span>
          { tinsOfInk[keyProps] }
          {' '}
          lata(s) de tinta
          {' '}
        </span>
        de
        {' '}
        <span>
          { keyProps }
          {' '}
          L
        </span>
      </li>
    </ul>
  </div>
);

export default TinsQtySizes;

TinsQtySizes.propTypes = {
  keyProps: PropTypes.number.isRequired,
  tinsOfInk: PropTypes.shape({
    18: PropTypes.number,
    3.6: PropTypes.number,
    2: PropTypes.number,
    0.5: PropTypes.number,
  }),
};

TinsQtySizes.defaultProps = {
  tinsOfInk: {},
};
