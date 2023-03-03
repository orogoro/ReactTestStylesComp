import { useState } from 'react';

import infoTime from '../../images/svg/infoTime.svg';
import settingsNoActive from '../../images/svg/settingsNoActive.svg';
import settingsActive from '../../images/svg/settingsActive.svg';

import { TableSalesTime } from '../';

import {
  Container,
  ContainerNav,
  ContainerNavTitle,
  ContainerText,
  ContainerNavImg,
  NavModalDiv,
  ContainerNavModal,
  NavTitle,
  InfoIcon,
} from './GeneralSalesTime.styled';

function GeneralSalesTime({ data }) {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <ContainerNav>
        <NavTitle>
          <ContainerNavTitle>General Sales / Time</ContainerNavTitle>
          <InfoIcon src={infoTime} alt="infoTime" />
        </NavTitle>
        <ContainerText>
          <ContainerNavImg
            src={active ? settingsActive : settingsNoActive}
            alt="settings"
          />
          <NavModalDiv
            onClick={() => setActive(prevState => !prevState)}
            active={active}
          >
            <ContainerNavModal active={active}>
              Table settings
            </ContainerNavModal>
            {/* <DropDownStats
              active={active}
            /> */}
          </NavModalDiv>
        </ContainerText>
      </ContainerNav>

      <TableSalesTime data={data} />
    </Container>
  );
}

export default GeneralSalesTime;
