import minMaxWalls from './minMaxWalls';
import wallsBiggerThanDoor from './wallsBiggerThanDoor';
import wallsBiggerThanWindow from './wallsBiggerThanWindow';
import calcAreaWalls from './calcAreaWalls';
import calcAreaDoors from './calcAreaDoors';
import calcAreaWindows from './calcAreaWindows';

const percent50 = 0.5;

export default (walls) => {
  const lengthMinMaxWalls = minMaxWalls(walls);
  const sizeWallsBiggerThanDoor = wallsBiggerThanDoor(walls);
  const sizeWallsBiggerThanWindow = wallsBiggerThanWindow(walls);

  const areaWalls = calcAreaWalls(walls);
  const areaDoors = calcAreaDoors(walls);
  const areaWindow = calcAreaWindows(walls);
  const areaTotalValidation = (areaDoors + areaWindow) <= areaWalls * percent50;

  if (!lengthMinMaxWalls) {
    return 'A parede da sala não pode ter menos de 1 metro nem mais que 15 metros';
  }

  if (!sizeWallsBiggerThanDoor || !sizeWallsBiggerThanWindow) {
    return `A porta ou janela deve ser, no mínimo, 30 
    centímetros menor em largura ou altura em relação a parede da sala`;
  }

  if (!areaTotalValidation) {
    return `O total da área de portas e janelas é
    maior que o máximo de 50% do total da área das paredes.`;
  }

  return true;
};
