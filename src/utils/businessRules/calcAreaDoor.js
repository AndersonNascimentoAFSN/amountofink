import { doorSize } from './sizeDoorWindow';

export default (qty) => {
  const areaDoor = (doorSize.height * doorSize.width) * qty;
  return areaDoor;
};
