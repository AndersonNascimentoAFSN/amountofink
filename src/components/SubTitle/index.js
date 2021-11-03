import React from 'react';
import PropTypes from 'prop-types';

const SubTitle = ({ subtitle }) => (
  <h2>
    { subtitle }
  </h2>
);

export default SubTitle;

SubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
