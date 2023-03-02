import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 16px;
  }
`;

export const Label = styled.label`
  position: relative;
  padding: 0 0 0 35px;
  cursor: pointer;

  :before {
    content: '';
    position: absolute;
    top: -15px;
    left: -5px;
    width: 22px;
    height: 22px;
    border: 2px solid ${props => props.color};
    border-radius: 3px;
    background: transparent;
  }

  &:after {
    content: '';
    position: absolute;
    top: -11px;
    left: -1px;
    width: 18px;
    height: 18px;
    border-radius: 1px;
    background: ${props => props.color};
    opacity: 0;
    transition: 0.2s;
  }
`;

export const InputRadio = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 7px;

  &:checked + .radio__lable:after {
    opacity: 1;
  }
`;

export const ContainerRate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Rate = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
`;

export const RateText = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;
