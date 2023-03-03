import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84px;
  padding: 14px 18px;
  background-color: #242731;

  @media screen and (max-width: 1440px) {
    width: 70px;
  }
`;

export const Logo = styled.img`
  width: 40px;
  margin-bottom: 46px;
`;
