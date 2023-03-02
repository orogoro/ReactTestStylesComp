import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 16px;
  }
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;
