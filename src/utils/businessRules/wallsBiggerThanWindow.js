import wallBiggerThanWindow from './wallBiggerThanWindow';

export default (walls) => Object.keys(walls)
  .every((key) => wallBiggerThanWindow(
    walls[key].height, walls[key].width, walls[key].qtyWindow,
  ));
