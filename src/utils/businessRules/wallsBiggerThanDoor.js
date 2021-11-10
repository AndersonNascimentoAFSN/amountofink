import wallBiggerThanDoor from './wallBiggerThanDoor';

export default (walls) => Object.keys(walls)
  .every((key) => wallBiggerThanDoor(
    walls[key].height, walls[key].width, walls[key].qtyDoor,
  ));
