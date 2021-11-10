import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WallAreas from '../WallAreas';
import Result from '../Result';
import * as businessRules from '../../utils/businessRules';

const FormCalculator = () => {
  const globalState = useSelector((state) => state);
  const { calculatorReducer } = globalState;
  const [areaTotal, setAreaTotal] = useState();
  const [qtyOfInk, setQtyOfInk] = useState();
  const [tinsOfInk, setTinsOfInk] = useState();
  const [validation, setValidation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { rooms } = calculatorReducer;

    const [validations] = rooms.map((room) => businessRules.validations(room));

    if (validations === true) {
      const areaWallTotal = rooms.reduce((areaTotalAcc, room) => {
        areaTotalAcc += businessRules.calcAreaTotal(room);
        return areaTotalAcc;
      }, 0);

      const qtyOfInkPrintWall = rooms.reduce((qtyOfInkTotalAcc, room) => {
        qtyOfInkTotalAcc += businessRules.qtyTotalOfInk(room);
        return qtyOfInkTotalAcc;
      }, 0);

      setAreaTotal(areaWallTotal);
      setQtyOfInk(qtyOfInkPrintWall);
      setTinsOfInk(businessRules.sizeTinCalc(qtyOfInkPrintWall));
    }
    setValidation(validations);
  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        {calculatorReducer.rooms.map((item, index) => (
          <WallAreas
            key={ `${item[index]}_${index}` }
            walls={ item }
            roomIndex={ index }
          />
        ))}
        <button type="submit">Calcular</button>
      </form>
      <Result areaTotal={ areaTotal } qtyOfInk={ qtyOfInk } tinsOfInk={ tinsOfInk } />
      {validation !== true ? <span>{validation}</span> : ''}
    </>
  );
};

export default FormCalculator;
