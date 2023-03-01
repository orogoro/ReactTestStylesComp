import user_light from '../../images/svg/user_light.svg';

import {
  Container,
  Title,
  ContainerUser,
  ContainerIcon,
  Icon,
  Text,
} from './UserPanel.styled';

function UserPanel({ email }) {
  return (
    <Container>
      <Title>Dashboard</Title>
      <ContainerUser>
        <ContainerIcon>
          <Icon src={user_light} alt='user_light' />
        </ContainerIcon>
        <Text>{email ? email : 'Username'}</Text>
      </ContainerUser>
    </Container>
  );
}

export default UserPanel;
