import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 160px 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 48px;
`;

export const Title = styled.h1`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
`;

export const TitleText = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 500px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  & + & {
    margin-top: 16px;
  }
`;

export const Input = styled.input`
  border: 1px solid ${(props) => (props.errors ? '#cb3d40' : '#3d4250')};
  border-radius: 8px;
  padding: 20px 16px;
  background-color: transparent;
  width: 100%;
  color: #ffffff;
  outline: none;

  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #cb3d40;
  margin-left: 20px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.disabled ? '#3d4250' : '#8941ff')};
  border: 1px solid ${(props) => (props.disabled ? '#3d4250' : '#8941ff')};
  padding: 20px 40px;
  margin: 48px 0;
  border-radius: 8px;
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? '#3d4250' : 'transparent'};
  }
`;

export const ContainerLink = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
`;

export const StyledLink = styled(Link)`
  color: #78b4ed;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
`;

export const ShowPassword = styled.span`
  position: absolute;
  top: 33%;
  right: 20px;
  color: #ffffff;
  font-size: 18px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;
