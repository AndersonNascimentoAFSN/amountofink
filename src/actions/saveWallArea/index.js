const SAVE_WALL_AREA = 'SAVE_WALL_AREA';
const saveWallArea = (wallArea) => (
  { type: SAVE_WALL_AREA, wallArea }
);

export {
  SAVE_WALL_AREA,
  saveWallArea,
};
