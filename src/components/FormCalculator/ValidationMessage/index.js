import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ValidationMessage = ({ validationMessage }) => (
  <span className="c-validationMessage">{ validationMessage }</span>
);

export default ValidationMessage;

ValidationMessage.propTypes = {
  validationMessage: PropTypes.string.isRequired,
};
