import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 4px;
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #242731;
  border-radius: 40px;
  width: 36px;
  height: 36px;
`;

export const Icon = styled.img`
  width: 24px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-left: 12px;
  color: #ffffff;
`;
