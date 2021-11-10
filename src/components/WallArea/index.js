import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { saveWallArea } from '../../actions/saveWallArea';

const WallArea = ({ dimensions, roomIndex, roomName }) => {
  const dispatch = useDispatch();
  const [dimensionsState, setDimensionsState] = useState(dimensions);

  const handleWallArea = ({ target: { name, value } }) => {
    setDimensionsState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(saveWallArea({ roomIndex, roomName, dimensions: dimensionsState }));
  }, [dispatch, dimensionsState, roomIndex, roomName]);

  return (
    <div>
      <input
        type="text"
        placeholder="Altura(m)"
        name="height"
        onChange={ handleWallArea }
        value={ dimensionsState.height }
      />
      <input
        type="text"
        placeholder="Largura(m)"
        name="width"
        onChange={ handleWallArea }
        value={ dimensionsState.width }
      />
      <input
        type="text"
        placeholder="quantidade de portas"
        name="qtyDoor"
        onChange={ handleWallArea }
        value={ dimensionsState.qtyDoor }
      />
      <input
        type="text"
        placeholder="quantidade de janelas"
        name="qtyWindow"
        onChange={ handleWallArea }
        value={ dimensionsState.qtyWindow }
      />
    </div>
  );
};

export default WallArea;

WallArea.propTypes = {
  dimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    qtyDoor: PropTypes.number,
    qtyWindow: PropTypes.number,
  }).isRequired,
  roomName: PropTypes.string.isRequired,
  roomIndex: PropTypes.number.isRequired,
};
