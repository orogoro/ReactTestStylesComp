import { TableSalesTimeItem } from '../';

import { Container, ContainerTitle, Title } from './TableSalesTime.styled';

function TableSalesTime({ data }) {
  const firstPokemon = data?.[0];
  const getMonth = firstPokemon?.date?.slice(3, 5);
  const getDay = firstPokemon?.date?.slice(0, 2);
  const getYear = firstPokemon?.date?.slice(-4);
  var arr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentMonth = arr
    .filter((item, index) => index === Number(getMonth) - 1)
    .join('');
  const date = `${currentMonth} ${getDay}, ${getYear}`;

  return (
    <Container>
      <ContainerTitle>
        <Title>Card model</Title>
        <Title>Card name</Title>
        <Title>Type</Title>
        <Title>Limited</Title>
        <Title>№ Operations</Title>
        <Title>Date of lost operations</Title>
        <Title>Rating</Title>
        <Title>Status</Title>
        <Title>Price</Title>
        <Title>Options</Title>
      </ContainerTitle>

      <TableSalesTimeItem
        card_name={firstPokemon?.card_name}
        card_number={firstPokemon?.card_number}
        limited={firstPokemon?.limited}
        name={firstPokemon?.model.name}
        operations={firstPokemon?.operations}
        price={firstPokemon?.price}
        rating={firstPokemon?.rating}
        status={firstPokemon?.status}
        type={firstPokemon?.type}
        date={date}
      />
      <TableSalesTimeItem
        card_name={firstPokemon?.card_name}
        card_number={firstPokemon?.card_number}
        limited={firstPokemon?.limited}
        name={firstPokemon?.model.name}
        operations={firstPokemon?.operations}
        price={firstPokemon?.price}
        rating={firstPokemon?.rating}
        status={firstPokemon?.status}
        type={firstPokemon?.type}
        date={date}
      />
      <TableSalesTimeItem
        card_name={firstPokemon?.card_name}
        card_number={firstPokemon?.card_number}
        limited={firstPokemon?.limited}
        name={firstPokemon?.model.name}
        operations={firstPokemon?.operations}
        price={firstPokemon?.price}
        rating={firstPokemon?.rating}
        status={firstPokemon?.status}
        type={firstPokemon?.type}
        date={date}
      />
      <TableSalesTimeItem
        card_name={firstPokemon?.card_name}
        card_number={firstPokemon?.card_number}
        limited={firstPokemon?.limited}
        name={firstPokemon?.model.name}
        operations={firstPokemon?.operations}
        price={firstPokemon?.price}
        rating={firstPokemon?.rating}
        status={firstPokemon?.status}
        type={firstPokemon?.type}
        date={date}
      />
      <TableSalesTimeItem
        card_name={firstPokemon?.card_name}
        card_number={firstPokemon?.card_number}
        limited={firstPokemon?.limited}
        name={firstPokemon?.model.name}
        operations={firstPokemon?.operations}
        price={firstPokemon?.price}
        rating={firstPokemon?.rating}
        status={firstPokemon?.status}
        type={firstPokemon?.type}
        date={date}
      />
    </Container>
  );
}

export default TableSalesTime;
