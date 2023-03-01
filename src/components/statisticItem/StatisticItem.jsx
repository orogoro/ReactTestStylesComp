import {
  Container,
  ContainerIcon,
  Icon,
  ContainerStatictics,
  Number,
  Text,
} from './StatisticItem.styled';

function StatisticItem({ statistic, icon, text, color }) {
  return (
    <Container>
      <ContainerIcon color={color}>
        <Icon src={icon} alt="icon" />
      </ContainerIcon>
      <ContainerStatictics>
        <Number>{statistic}</Number>
        <Text>{text}</Text>
      </ContainerStatictics>
    </Container>
  );
}

export default StatisticItem;
