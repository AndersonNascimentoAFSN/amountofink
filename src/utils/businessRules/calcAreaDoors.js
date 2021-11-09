import calcAreaDoor from './calcAreaDoor';

export default (walls) => Object.keys(walls).reduce((acc, key) => {
  acc += calcAreaDoor(walls[key].qtyDoor);
  return acc;
}, 0);
