import calcAreaWalls from './calcAreaWalls';
import calcAreaDoors from './calcAreaDoors';
import calcAreaWindows from './calcAreaWindows';

export default (walls) => {
  const areaWalls = calcAreaWalls(walls);
  const areaDoors = calcAreaDoors(walls);
  const areaWindow = calcAreaWindows(walls);

  return areaWalls - (areaDoors + areaWindow);
};
