import { RatingItem } from '../';

import { Container } from './Rating.styled';

function Rating() {
  return (
    <Container>
      <RatingItem color={'#18A0FB'} id="1" checked />
      <RatingItem color={'#ED2D95'} id="2" checked />
      <RatingItem color={'#3CDC86'} id="3" checked />
      <RatingItem color={'#F4A732'} id="4" />
      <RatingItem color={'#9B53F8'} id="5" />
    </Container>
  );
}

export default Rating;
