import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 32px;
`;

export const ContainerName = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
`;

export const Image = styled.img`
  width: 28px;
  margin-right: 16px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;

  & + & {
    margin-left: 100px;
  }

  &:nth-child(3) {
    margin-left: 120px;
  }

  &:nth-child(4) {
    margin-left: 90px;
  }

  &:nth-child(5) {
    margin-left: 150px;
  }

  &:nth-child(6) {
    margin-left: 130px;
  }

  &:nth-child(7) {
    margin-left: 110px;
  }

  &:nth-child(8) {
    margin-left: 110px;
  }

  &:nth-child(9) {
    margin-left: 70px;
  }
`;

export const Card = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export const Icon = styled.img`
  width: 24px;
  margin-left: 140px;
`;
