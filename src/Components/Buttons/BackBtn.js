import React from 'react';
import { TiArrowBack } from 'react-icons/ti';
import DivBackBtn from '../../StyledComponents/BackBtn';

export default function BackBtn() {
  return (
    <DivBackBtn>
      <TiArrowBack onClick={ () => window.history.back() } />
    </DivBackBtn>
  );
}
