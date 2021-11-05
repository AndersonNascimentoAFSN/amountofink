import { SAVE_WALL_AREA } from '../actions/saveWallArea';

const INITIAL_STATE = {
  walls: {},
  // walls: {
  //   wall1: { height, width, qtyDoor, qtyWindow },
  //   wall2: { height, width, qtyDoor, qtyWindow },
  //   wall3: { height, width, qtyDoor, qtyWindow },
  //   wall4: { height, width, qtyDoor, qtyWindow },
  // }
};

const calculatorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_WALL_AREA:
    return { ...state, walls: { ...state.walls, ...action.wallArea } };
  default:
    return state;
  }
};

export default calculatorReducer;
