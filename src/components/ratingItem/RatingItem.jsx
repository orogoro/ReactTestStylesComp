import { toast } from 'react-toastify';

import {
  Container,
  Label,
  InputRadio,
  ContainerRate,
  Rate,
  RateText,
} from './RatingItem.styled';

function RatingItem({ color, id, checked, onChange, value }) {
  let bool = false;
  const onChangeInput = e => {
    bool = !bool;

    if (value === false && bool === true) {
      toast.error('No such data');
      return;
    }

    onChange(e.target.value);
  };

  return (
    <Container>
      <InputRadio
        onChange={onChangeInput}
        type="checkbox"
        id={`${id}`}
        name="happy"
        value={value}
        color={color}
        className="radio__input"
        defaultChecked={checked}
      />
      <Label htmlFor={`${id}`} color={color} className="radio__lable"></Label>
      <ContainerRate>
        <Rate> Rating 94%</Rate>
        <RateText> 116 sales</RateText>
      </ContainerRate>
    </Container>
  );
}

export default RatingItem;
