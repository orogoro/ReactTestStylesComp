import styled from 'styled-components';
import arrow_down from '../../images/svg/arrow-down.svg';
import arrowDownActive from '../../images/svg/arrowDownActive.svg';

export const Container = styled.div`
  background-color: #242731;
  padding: 24px 0;
  border-radius: 4px;
`;

export const NavTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoIcon = styled.img`
  width: 24px;
  margin-left: 14px;
`;

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
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

export const ContainerNavImg = styled.img`
  width: 24px;
  margin-right: 9px;
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
