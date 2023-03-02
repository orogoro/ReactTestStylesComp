import { Container, Title, Text } from './UsersItem.styled';

function UsersItem({ name, date }) {
  return (
    <Container>
      <Title>{name}</Title>
      <Text>{date}</Text>
    </Container>
  );
}

export default UsersItem;
