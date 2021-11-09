export default (walls) => {
  const areaWalls = Object.keys(walls).reduce((acc, key) => {
    acc += walls[key].height * walls[key].width;
    return acc;
  }, 0);

  return areaWalls;
};
