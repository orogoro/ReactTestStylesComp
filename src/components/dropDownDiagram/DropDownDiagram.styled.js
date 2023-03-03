import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 25px;
  right: -20px;
  width: 300px;

  padding: 14px 20px 14px 29px;
  z-index: 999;
  opacity: ${props => (props.active ? 1 : 0)};
  pointer-events: ${props => (props.active ? 'all' : 'none')};
  transition: 0.5s;
  background-color: #242731;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(36, 38, 53, 0.08),
    0px 4px 12px rgba(36, 38, 53, 0.1), 0px 16px 24px rgba(55, 58, 83, 0.16);
  border-radius: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Lable = styled.label`
  position: relative;
  padding: 0 0 0 35px;
  margin: 18px 0;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;

  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -10px;
    width: 22px;
    height: 22px;
    border: 2px solid #8941ff;
    border-radius: 50%;
    background: transparent;
  }

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: -6px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #8941ff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: 0.2s;
  }
`;

export const InpunRadio = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 7px;

  &:checked + label:after {
    opacity: 1;
  }

  &:not(::checked) + label:after {
    opacity: 0;
  }
`;
