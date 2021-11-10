import { windowSize } from './sizeDoorWindow';

export default (qty) => {
  const areaWindow = (windowSize.height * windowSize.width) * qty;
  return areaWindow;
};
