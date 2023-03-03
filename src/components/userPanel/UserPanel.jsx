import { useDispatch, useSelector } from 'react-redux';

import { authOperations, authSelector } from '../../redux/auth';

import user_light from '../../images/svg/user_light.svg';

import {
  Container,
  Title,
  ContainerUser,
  ContainerIcon,
  Icon,
  Text,
  ButtonLogOut,
} from './UserPanel.styled';

function UserPanel({ email }) {
  const isLogin = useSelector(authSelector.getIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>Dashboard</Title>
      <ContainerUser>
        {isLogin && (
          <ButtonLogOut onClick={() => dispatch(authOperations.logOutUser())}>
            Log Out
          </ButtonLogOut>
        )}
        <ContainerIcon>
          <Icon src={user_light} alt="user_light" />
        </ContainerIcon>
        <Text>{email ? email : 'Username'}</Text>
      </ContainerUser>
    </Container>
  );
}

export default UserPanel;
