import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SubTitle = ({ subtitle }) => (
  <h2 className="c-subtitle">
    { subtitle }
  </h2>
);

export default SubTitle;

SubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
