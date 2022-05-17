import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import Button from '../../StyledComponents/Button';
import { ButtonContainer } from '../../StyledComponents/ProfileStyled';

export default function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header
        title="Explore"
        searchButton={ false }
      />
      <div style={ { maxWidth: '100%', display: 'flex', justifyContent: 'center' } }>
        <ButtonContainer>
          <Button
            type="button"
            data-testid="explore-foods"
            onClick={ () => history.push('/explore/foods') }
          >
            Explore Foods
          </Button>
          <Button
            type="button"
            data-testid="explore-drinks"
            onClick={ () => history.push('/explore/drinks') }
          >
            Explore Drinks
          </Button>
        </ButtonContainer>
      </div>
      <MenuInferior />
    </div>
  );
}
