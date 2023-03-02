import { useState } from 'react';
import { StackedAreaChart, Rating, Users } from '../';

import {
  Container,
  ContainerRate,
  ContainerNav,
  ContainerNavTitle,
  ContainerNavText,
  ContainerText,
  ContainerNavModal,
  NavModalDiv,
} from './Diagram.styled';

function Diagram({ chartData, users }) {
  const [active, setActive] = useState(false);
  const [currentValue, setCurrentValue] = useState('Graph');
  console.log(setCurrentValue);
  return (
    <Container>
      <ContainerNav>
        <ContainerNavTitle>Game Stats</ContainerNavTitle>
        <ContainerText>
          <ContainerNavText>Location</ContainerNavText>
          <NavModalDiv
            onClick={() => setActive(prevState => !prevState)}
            active={active}
          >
            <ContainerNavModal active={active}>
              {currentValue}
            </ContainerNavModal>
            {/* <DropDownStats
              active={active}
              setCurrentValue={setCurrentValue}
              currentValue={currentValue}
            /> */}
          </NavModalDiv>
        </ContainerText>
      </ContainerNav>
      <ContainerRate>
        <StackedAreaChart chartData={chartData} />
        <Rating />
        <Users users={users} />
      </ContainerRate>
    </Container>
  );
}

export default Diagram;
