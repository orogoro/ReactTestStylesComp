import actionMenu from '../../images/svg/actionMenu.svg';
import pokemonTest from '../../images/pokemonTest.png';

import {
  Container,
  Image,
  Text,
  ContainerName,
  Card,
  Icon,
  ContainerCard,
} from './TableSalesTimeItem.styled';

function TableSalesTimeItem({
  card_name,
  card_number,
  limited,
  name,
  operations,
  price,
  rating,
  status,
  type,
  date,
}) {
  return (
    <Container>
      <ContainerName>
        <Image src={pokemonTest} alt="pokemonTest" />
        <Text>{name}</Text>
      </ContainerName>
      <ContainerCard>
        <Text>{card_name}</Text>
        <Card>Card {card_number}</Card>
      </ContainerCard>
      <Text>{type}</Text>
      <Text>{limited}</Text>
      <Text>{operations}</Text>
      <Text>{date}</Text>
      <Text>{rating}%</Text>
      <Text>{status}</Text>
      <Text>{price}</Text>
      <Icon src={actionMenu} alt="actionMenu" />
    </Container>
  );
}

export default TableSalesTimeItem;
