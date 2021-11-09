import minMaxWall from './minMaxWall';

export default (walls) => Object.keys(walls)
  .every((key) => minMaxWall(walls[key].height, walls[key].width));
