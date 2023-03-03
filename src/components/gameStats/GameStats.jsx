import { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useSelector } from 'react-redux';

import { authSelector } from '../../redux/auth';

import { DropDownStats } from '../';

import {
  Container,
  ContainerPie,
  ContainerPieInfo,
  ContainerPieInfoTitle,
  ContainerPieInfoNumber,
  ContainerPieInfoText,
  ContainerNav,
  ContainerNavTitle,
  ContainerNavText,
  ContainerText,
  ContainerNavModal,
  ContainerStats,
  StatsText,
  NavModalDiv,
  Loading,
} from './GameStats.styled';

const data = [
  { name: 'Roles', value: 50 },
  { name: 'Users', value: 100 },
  { name: 'Policies', value: 500 },
];
const COLORS = ['#18A0FB', '#3CDC86', '#ED2D95'];

function GameStats() {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const [active, setActive] = useState(false);
  const [currentValue, setCurrentValue] = useState('Naperville');

  return (
    <Container>
      {isLoggedIn ? (
        <>
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
                <DropDownStats
                  active={active}
                  setCurrentValue={setCurrentValue}
                  currentValue={currentValue}
                />
              </NavModalDiv>
            </ContainerText>
          </ContainerNav>
          <ContainerPie>
            <PieChart width={232} height={232}>
              <Pie
                data={data}
                cx={110}
                cy={110}
                startAngle={60}
                minAngle={80}
                endAngle={420}
                innerRadius={90}
                outerRadius={110}
                fill="#8884d8"
                paddingAngle={6}
                dataKey="value"
                stroke="transparent"
                cornerRadius={40}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <ContainerPieInfo>
              <ContainerPieInfoTitle>Excessive</ContainerPieInfoTitle>
              <ContainerPieInfoNumber>85%</ContainerPieInfoNumber>
              <ContainerPieInfoText>
                +40 418 in the last 30 days
              </ContainerPieInfoText>
            </ContainerPieInfo>

            <ContainerStats>
              <StatsText color="#18A0FB">Roles</StatsText>
              <StatsText color="#ED2D95">Users</StatsText>
              <StatsText color="#3CDC86">Policies</StatsText>
            </ContainerStats>
          </ContainerPie>
        </>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </Container>
  );
}

export default GameStats;
