import { nanoid } from 'nanoid';
import { UsersItem } from '../';

import { Container } from './Users.styled';

function Users({ users }) {
  return (
    <Container>
      {users?.map(({ name, date }) => (
        <UsersItem key={nanoid()} name={name} date={date} />
      ))}
    </Container>
  );
}

export default Users;
