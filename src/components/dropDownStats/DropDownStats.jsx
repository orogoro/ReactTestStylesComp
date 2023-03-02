import { Container, Text, List } from './DropDownStats.styled';

function DropDownStats({ active, setCurrentValue, currentValue }) {
  const onClickFn = e => {
    switch (e.target.id) {
      case '1':
        setCurrentValue('Charlottetown');
        break;
      case '2':
        setCurrentValue('Halifax');
        break;
      case '3':
        setCurrentValue('Naperville');
        break;
      case '4':
        setCurrentValue('Vernon');
        break;
      case '5':
        setCurrentValue('Montreal');
        break;
      default:
    }
  };

  return (
    <Container active={active}>
      <List onClick={onClickFn}>
        <Text id="1" activeStyle={currentValue === 'Charlottetown'}>
          Charlottetown
        </Text>
        <Text id="2" activeStyle={currentValue === 'Halifax'}>
          Halifax
        </Text>
        <Text id="3" activeStyle={currentValue === 'Naperville'}>
          Naperville
        </Text>
        <Text id="4" activeStyle={currentValue === 'Vernon'}>
          Vernon
        </Text>
        <Text id="5" activeStyle={currentValue === 'Montreal'}>
          Montreal
        </Text>
      </List>
    </Container>
  );
}

export default DropDownStats;
