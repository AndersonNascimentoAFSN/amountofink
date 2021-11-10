import calcAreaTotal from './calcAreaTotal';

const literInkForSquareMeters = 5;

export default (walls) => {
  const areaTotal = calcAreaTotal(walls);
  return (areaTotal / literInkForSquareMeters);
};
