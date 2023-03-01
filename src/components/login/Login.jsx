import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations, authSelector } from '../../redux/auth';

import { Loader } from '../';

import {
  Container,
  ContainerTitle,
  Title,
  TitleText,
  Form,
  Input,
  InputContainer,
  Button,
  ErrorText,
  ContainerLink,
  StyledLink,
  ShowPassword,
} from './Login.styled';

function Login() {
  const [disable, setDisable] = useState(true);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(authSelector.getLoader);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const email = watch('email');
  const password = watch('password');

  const handleSubmitForm = (data) => {
    dispatch(authOperations.loginUser(data));
    reset();
  };

  useEffect(() => {
    if (email && password) {
      setDisable(false);
      return;
    }
    setDisable(true);
  }, [email, password]);

  return (
    <Container>
      <ContainerTitle>
        <Title>Welcome back</Title>
        <TitleText>Welcome back! Please enter your details</TitleText>
      </ContainerTitle>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <InputContainer>
          <Input
            errors={errors.email}
            type='email'
            {...register('email', {
              required: 'This is required',
              minLength: {
                value: 2,
                message: 'Min length is 2',
              },
              maxLength: {
                value: 100,
                message: 'Max length is 100',
              },
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: 'example@gmail.com',
              },
            })}
            placeholder='Email'
          />
          <ErrorText>{errors.email?.message}</ErrorText>
        </InputContainer>

        <InputContainer>
          <Input
            errors={errors.password}
            type={show ? 'text' : 'password'}
            {...register('password', {
              required: 'This is required',
              minLength: {
                value: 2,
                message: 'Min length is 2',
              },
              maxLength: {
                value: 100,
                message: 'Max length is 100',
              },
            })}
            placeholder='Password'
          />
          <ShowPassword onClick={() => setShow(!show)}>
            {show && (
              <IconContext.Provider
                value={{ style: { verticalAlign: 'middle' } }}
              >
                <FiEye />
              </IconContext.Provider>
            )}
            {!show && (
              <IconContext.Provider
                value={{ style: { verticalAlign: 'middle' } }}
              >
                <FiEyeOff />
              </IconContext.Provider>
            )}
          </ShowPassword>
          <ErrorText>{errors.password?.message}</ErrorText>
        </InputContainer>

        {!loading ? (
          <Button type='submit' disabled={disable}>
            Log in
          </Button>
        ) : (
          <Loader size={50} />
        )}
        <ContainerLink>
          Or <StyledLink to={`${'/register'}`}> Sign up</StyledLink>
        </ContainerLink>
      </Form>
    </Container>
  );
}

export default Login;
