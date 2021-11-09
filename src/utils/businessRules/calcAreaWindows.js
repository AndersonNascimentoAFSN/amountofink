import calcAreaWindow from './calcAreaWindow';

export default (walls) => Object.keys(walls).reduce((acc, key) => {
  acc += calcAreaWindow(walls[key].qtyWindow);
  return acc;
}, 0);
