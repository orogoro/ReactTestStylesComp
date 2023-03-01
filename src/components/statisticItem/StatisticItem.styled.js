import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: flex-start;
  background-color: #242731;
  padding: 20px;
  width: 20%;

  box-shadow: 0px 8px 28px rgba(48, 48, 49, 0.1);
  border-radius: 8px;

  & + & {
    margin-left: 20px;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: ${props => props.color};
  border-radius: 8px;
`;

export const Icon = styled.img`
  width: 24px;
`;

export const ContainerStatictics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 22px;
`;

export const Number = styled.p`
  font-weight: 400;
  font-size: 44px;
  line-height: 48px;
  color: #ffffff;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #a2a4a8;
`;
