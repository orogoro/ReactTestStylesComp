import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #191c23;
  border-radius: 40px;
  width: 48px;
  height: 48px;
  padding: 12px;

  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: #8941ff;
  }

  & + & {
    margin-top: 20px;
  }
`;

export const Icon = styled.img`
  width: 24px;
`;
