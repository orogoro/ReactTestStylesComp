// import { toast } from 'react-toastify';
import { RatingItem } from '../';

import { Container } from './Rating.styled';

function Rating({ setActiveDiagtam }) {
  const onChange = value => {
    switch (value) {
      case 'blue':
        setActiveDiagtam(prevState => {
          if (prevState.blue === false) {
            return { ...prevState, blue: true };
          }
          return { ...prevState, blue: false };
        });
        break;
      case 'red':
        setActiveDiagtam(prevState => {
          if (prevState.red === false) {
            return { ...prevState, red: true };
          }
          return { ...prevState, red: false };
        });
        break;
      case 'green':
        setActiveDiagtam(prevState => {
          if (prevState.green === false) {
            return { ...prevState, green: true };
          }
          return { ...prevState, green: false };
        });
        break;

      default:
    }
  };
  return (
    <Container>
      <RatingItem
        color={'#18A0FB'}
        id="1"
        value={'blue'}
        checked
        onChange={onChange}
      />
      <RatingItem
        color={'#ED2D95'}
        id="2"
        value={'red'}
        checked
        onChange={onChange}
      />
      <RatingItem
        color={'#3CDC86'}
        value={'green'}
        id="3"
        checked
        onChange={onChange}
      />
      <RatingItem color={'#F4A732'} value={false} id="4" onChange={onChange} />
      <RatingItem color={'#9B53F8'} value={false} id="5" onChange={onChange} />
    </Container>
  );
}

export default Rating;
