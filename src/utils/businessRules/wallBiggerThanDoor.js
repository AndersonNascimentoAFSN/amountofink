import { doorSize } from './sizeDoorWindow';

const sizeDiff = 0.3;

const ruleSize = (wall, door, diff) => +(wall - door).toPrecision(1) >= diff;

export default (wallHeight, wallWidth, qtyDoor) => {
  if (qtyDoor <= 0) return true;
  const sizeHeight = ruleSize(wallHeight, doorSize.height, sizeDiff);
  const sizeWidth = ruleSize(wallWidth, doorSize.width, sizeDiff);

  if (sizeHeight && sizeWidth) return true;
  return false;
};
