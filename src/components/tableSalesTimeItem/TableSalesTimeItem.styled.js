import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 32px;

  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
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

    @media screen and (max-width: 1440px) {
      margin-left: 50px;
    }
  }

  &:nth-child(3) {
    margin-left: 120px;

    @media screen and (max-width: 1440px) {
      margin-left: 50px;
    }
  }

  &:nth-child(4) {
    margin-left: 90px;

    @media screen and (max-width: 1440px) {
      margin-left: 45px;
    }
  }

  &:nth-child(5) {
    margin-left: 150px;

    @media screen and (max-width: 1440px) {
      margin-left: 100px;
    }
  }

  &:nth-child(6) {
    margin-left: 130px;

    @media screen and (max-width: 1440px) {
      margin-left: 80px;
    }
  }

  &:nth-child(7) {
    margin-left: 110px;

    @media screen and (max-width: 1440px) {
      margin-left: 70px;
    }
  }

  &:nth-child(8) {
    margin-left: 110px;

    @media screen and (max-width: 1440px) {
      margin-left: 55px;
    }
  }

  &:nth-child(9) {
    margin-left: 80px;

    @media screen and (max-width: 1440px) {
      margin-left: 45px;
    }
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

  @media screen and (max-width: 1440px) {
    margin-left: 75px;
  }
`;

export const Icon = styled.img`
  width: 24px;
  margin-left: 140px;

  @media screen and (max-width: 1440px) {
    margin-left: 90px;
  }
`;
