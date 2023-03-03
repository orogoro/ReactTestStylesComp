import { useState } from 'react';
import { useSelector } from 'react-redux';
import { StackedAreaChart, Rating, Users, DropDownDiagram } from '../';

import { dashboardSelector } from '../../redux/dashboard';

import {
  Container,
  ContainerRate,
  ContainerNav,
  ContainerNavTitle,
  ContainerNavText,
  ContainerText,
  ContainerNavModal,
  NavModalDiv,
  Loading,
} from './Diagram.styled';

function Diagram({ chartData, users }) {
  const loading = useSelector(dashboardSelector.getLoader);
  const [active, setActive] = useState(false);
  const [currentValue, setCurrentValue] = useState('Graph');

  return (
    <Container>
      <ContainerNav>
        <ContainerNavTitle>Game Stats</ContainerNavTitle>
        <ContainerText>
          <ContainerNavText>Data type</ContainerNavText>
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
        {chartData?.length !== 0 && !loading ? (
          <StackedAreaChart chartData={chartData} />
        ) : (
          <Loading>Loading...</Loading>
        )}
        <Rating />
        {users?.length !== 0 && <Users users={users} />}
      </ContainerRate>
    </Container>
  );
}

export default Diagram;
