import { windowSize } from './sizeDoorWindow';

const sizeDiff = 0.3;

const ruleSize = (wall, window, diff) => +(wall - window).toPrecision(1) >= diff;

export default (wallHeight, wallWidth, qtyWindow) => {
  if (qtyWindow <= 0) return true;

  const sizeHeight = ruleSize(wallHeight, windowSize.height, sizeDiff);
  const sizeWidth = ruleSize(wallWidth, windowSize.width, sizeDiff);

  if (sizeHeight && sizeWidth) return true;
  return false;
};
