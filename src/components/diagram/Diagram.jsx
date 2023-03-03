import { useState } from 'react';
import { StackedAreaChart, Rating, Users, DropDownDiagram } from '../';

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
            <DropDownDiagram
              active={active}
              setCurrentValue={setCurrentValue}
              currentValue={currentValue}
            />
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
