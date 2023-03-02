import styled from 'styled-components';
import tabler_check from '../../images/svg/tabler_check.svg';

export const Container = styled.div`
  position: absolute;
  top: 25px;
  right: -20px;
  width: 230px;

  padding: 8px;
  z-index: 999;
  opacity: ${props => (props.active ? 1 : 0)};
  pointer-events: ${props => (props.active ? 'all' : 'none')};
  transition: 0.5s;
  background-color: #242731;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6);
`;

export const List = styled.ul``;

export const Text = styled.li`
  position: relative;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${props => (props.activeStyle ? '#FFFFFF' : '#a2a4a8')};
  padding: 12px 16px;
  border-radius: 4px;
  background-color: ${props => (props.activeStyle ? '#31343D' : 'transparent')};

  &::after {
    content: '';
    display: ${props => (props.activeStyle ? 'block' : 'none')};
    position: absolute;
    top: 12px;
    right: 16px;
    width: 20px;
    height: 20px;
    background-image: url(${tabler_check});
  }
`;
