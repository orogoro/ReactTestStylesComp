import styled from 'styled-components';
import arrow_down from '../../images/svg/arrow-down.svg';
import arrowDownActive from '../../images/svg/arrowDownActive.svg';

export const Container = styled.div`
  background-color: #242731;
  padding: 24px 32px;
  margin-left: 16px;
  width: 25%;
  border-radius: 4px;
`;

export const ContainerPie = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerNavTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerNavText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-right: 16px;
`;

export const NavModalDiv = styled.div`
  position: relative;
  margin-right: 20px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &::after {
    content: '';
    background-image: url(${props =>
      props.active ? arrowDownActive : arrow_down});
    position: absolute;
    right: -20px;
    top: 0;

    background-size: 20px;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
`;

export const ContainerNavModal = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${props => (props.active ? '#81C2FF' : '#ffffff')};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ContainerPieInfo = styled.div`
  position: absolute;
  top: 22%;
  left: 15%;
  width: 123px;
  text-align: center;
`;

export const ContainerPieInfoTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #a7a9ad;
  text-transform: uppercase;
`;

export const ContainerPieInfoNumber = styled.p`
  font-weight: 500;
  font-size: 64px;
  line-height: 72px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const ContainerPieInfoText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 12px 27px 0 38px;
`;

export const StatsText = styled.p`
  position: relative;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #9f9f9f;

  & + & {
    margin-top: 16px;
  }

  &::before {
    position: absolute;
    content: '';

    top: 4px;
    left: -20px;
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background-color: ${props => props.color};
  }
`;
