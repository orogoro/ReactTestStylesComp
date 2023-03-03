import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);

  &:first-child {
    margin-right: 100px;

    @media screen and (max-width: 1440px) {
      margin-right: 80px;
    }
  }
  &:nth-child(2) {
    margin-right: 100px;

    @media screen and (max-width: 1440px) {
      margin-right: 80px;
    }
  }

  &:nth-child(9) {
    margin-right: 30px;

    @media screen and (max-width: 1440px) {
      /* margin-right: 20px; */
      margin-left: 20px;
    }
  }
`;
