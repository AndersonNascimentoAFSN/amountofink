import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { saveWallArea } from '../../actions/saveWallArea';

const WallArea = ({ wall }) => {
  const dispatch = useDispatch();
  const [area, setArea] = useState();
  const height = useRef('');
  const width = useRef('');
  const doors = useRef('');
  const windows = useRef('');

  const handleWallArea = () => {
    const valueHeight = height.current.value;
    const valueWidth = width.current.value;
    const valueDoors = doors.current.value;
    const valueWindows = windows.current.value;

    if (valueHeight && valueWidth) {
      setArea({ [wall]:
        { height: valueHeight,
          width: valueWidth,
          qtyDoor: valueDoors,
          qtyWindow: valueWindows },
      });
    }
  };

  useEffect(() => {
    if (!height.current.value && !width.current.value) return;
    dispatch(saveWallArea(area));
  }, [dispatch, area]);

  return (
    <div>
      <input
        type="text"
        placeholder="Altura(m)"
        name="height"
        ref={ height }
        onChange={ handleWallArea }
      />
      <input
        type="text"
        placeholder="Largura(m)"
        name="width"
        ref={ width }
        onChange={ handleWallArea }
      />
      <input
        type="text"
        placeholder="quantidade de portas"
        name="doors"
        ref={ doors }
        onChange={ handleWallArea }
      />
      <input
        type="text"
        placeholder="quantidade de janelas"
        name="windows"
        ref={ windows }
        onChange={ handleWallArea }
      />
    </div>
  );
};

export default WallArea;

WallArea.propTypes = {
  wall: PropTypes.string.isRequired,
};
