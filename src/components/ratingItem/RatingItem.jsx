import {
  Container,
  Label,
  InputRadio,
  ContainerRate,
  Rate,
  RateText,
} from './RatingItem.styled';

function RatingItem({ color, id }) {
  return (
    <Container>
      <InputRadio
        type="checkbox"
        id={`${id}`}
        name="happy"
        value="yes"
        color={color}
        className="radio__input"
      />
      <Label for={`${id}`} color={color} className="radio__lable"></Label>
      <ContainerRate>
        <Rate> Rating 94%</Rate>
        <RateText> 116 sales</RateText>
      </ContainerRate>
    </Container>
  );
}

export default RatingItem;
