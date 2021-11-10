import React from 'react';
import PropTypes from 'prop-types';
import WallArea from '../WallArea';

const WallAreas = ({ walls, roomIndex }) => (
  <>
    {
      Object.keys(walls).map((key, index) => (
        <WallArea
          key={ `${key}_${index}` }
          dimensions={ walls[key] }
          roomIndex={ roomIndex }
          roomName={ key }
        />
      ))
    }
  </>
);

WallAreas.propTypes = {
  walls: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    qtyDoor: PropTypes.number,
    qtyWindow: PropTypes.number,
  }).isRequired,
  roomIndex: PropTypes.number.isRequired,
};

export default WallAreas;
