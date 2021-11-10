import { SAVE_WALL_AREA } from '../actions/saveWallArea';

const INITIAL_STATE = {
  rooms: [
    { wall1: { height: 0, width: 0, qtyDoor: 0, qtyWindow: 0 },
      wall2: { height: 0, width: 0, qtyDoor: 0, qtyWindow: 0 },
      wall3: { height: 0, width: 0, qtyDoor: 0, qtyWindow: 0 },
      wall4: { height: 0, width: 0, qtyDoor: 0, qtyWindow: 0 },
    },
  ],
};

const calculatorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_WALL_AREA:
    return {
      ...state,
      rooms: state.rooms.map((room, index) => {
        if (index === action.data.roomIndex) {
          room[action.data.roomName] = action.data.dimensions;
        }
        return room;
      }),
    };
  default:
    return state;
  }
};

export default calculatorReducer;
