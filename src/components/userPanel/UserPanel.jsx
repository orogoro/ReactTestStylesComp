import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';

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
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>Dashboard</Title>
      <ContainerUser>
        <ButtonLogOut onClick={() => dispatch(authOperations.logOutUser())}>
          Log Out
        </ButtonLogOut>
        <ContainerIcon>
          <Icon src={user_light} alt="user_light" />
        </ContainerIcon>
        <Text>{email ? email : 'Username'}</Text>
      </ContainerUser>
    </Container>
  );
}

export default UserPanel;
