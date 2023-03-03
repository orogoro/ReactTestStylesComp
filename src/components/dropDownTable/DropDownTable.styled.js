import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 25px;
  right: -20px;
  width: 300px;

  padding: 14px 28px;
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

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 20px;

  &:checked + label:before {
    background: #8941ff;
  }

  &:checked + label:after {
    right: -47px;
  }
`;
export const Lable = styled.label`
  position: relative;
  width: 200px;
  cursor: pointer;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    right: -50px;
    width: 30px;
    height: 20px;
    border-radius: 13px;
    background: #60677a;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    right: -38px;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background: #242731;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
  }
`;
