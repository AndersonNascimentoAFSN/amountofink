import React from 'react';
import SubTitle from '../SubTitle';
import WallArea from '../WallArea';

const WallAreas = () => (
  <div>
    <SubTitle subtitle="Informe a área das quatro paredes" />
    <WallArea wall="wall1" />
    <WallArea wall="wall2" />
    <WallArea wall="wall3" />
    <WallArea wall="wall4" />
  </div>
);
export default WallAreas;
