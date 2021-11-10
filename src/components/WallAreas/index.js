import React from 'react';
import PropTypes from 'prop-types';
import SubTitle from '../SubTitle';
import WallArea from '../WallArea';

const WallAreas = ({ walls, roomIndex }) => (
  <div>
    <SubTitle
      subtitle="Informe as dimensões de cada
      parede da sala"
    />
    <p>
      Informe também, caso possua, a quantidade de portas
      e janelas de cada uma das paredes.
    </p>
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
  </div>
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
