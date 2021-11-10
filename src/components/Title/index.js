import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Title = ({ title }) => (
  <h1 className="c-title">
    { title }
  </h1>
);

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
