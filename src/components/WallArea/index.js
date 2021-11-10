import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
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
    <fieldset className="c-wall">
      { roomName.replace('wall', 'Parede ') }
      <label htmlFor={ `${roomName}_height` }>
        Altura (m):
        <input
          id={ `${roomName}_height` }
          type="number"
          placeholder="Altura(m)"
          name="height"
          onChange={ handleWallArea }
          value={ dimensionsState.height }
        />
      </label>

      <label htmlFor={ `${roomName}_width` }>
        Largura (m):
        <input
          id={ `${roomName}_width` }
          type="number"
          placeholder="Largura(m)"
          name="width"
          onChange={ handleWallArea }
          value={ dimensionsState.width }
        />
      </label>

      <label htmlFor={ `${roomName}_qtyDoor` }>
        Quantidade de portas:
        <input
          id={ `${roomName}_qtyDoor` }
          type="number"
          placeholder="quantidade de portas"
          name="qtyDoor"
          onChange={ handleWallArea }
          value={ dimensionsState.qtyDoor }
        />
      </label>

      <label htmlFor={ `${roomName}qtyWindow` }>
        Quantidade de janelas:
        <input
          id={ `${roomName}qtyWindow` }
          type="number"
          placeholder="quantidade de janelas"
          name="qtyWindow"
          onChange={ handleWallArea }
          value={ dimensionsState.qtyWindow }
        />
      </label>
    </fieldset>
  );
};

export default WallArea;

WallArea.propTypes = {
  dimensions: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
    qtyDoor: PropTypes.string,
    qtyWindow: PropTypes.string,
  }).isRequired,
  roomName: PropTypes.string.isRequired,
  roomIndex: PropTypes.number.isRequired,
};
