import sizesTin from './sizesTin';

const calc = {};

const sizeTinCalc = (qtyTotalInk) => {
  if (qtyTotalInk <= 0) return;

  for (let index = 0; index < sizesTin.length; index += 1) {
    const element = sizesTin[index];

    if (qtyTotalInk >= element) {
      calc[element] = parseInt(qtyTotalInk / element, 10);
      sizeTinCalc(qtyTotalInk %= element);
    } else if (qtyTotalInk <= sizesTin[sizesTin.length - 1]) {
      if (calc[sizesTin[sizesTin.length - 1]]) {
        calc[sizesTin[sizesTin.length - 1]] += 1;
        return;
      }

      calc[sizesTin[sizesTin.length - 1]] = 1;
      return;
    }
  }
  return calc;
};

export default sizeTinCalc;
