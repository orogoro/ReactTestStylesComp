import { Container, Lable, InpunRadio, Form } from './DropDownDiagram.styled';

function DropDownDiagram({ active, setCurrentValue, currentValue }) {
  const onChangeForm = e => {
    switch (e.target.value) {
      case 'Diagrams':
        setCurrentValue('Diagrams');
        break;
      case 'Graph':
        setCurrentValue('Graph');
        break;
      case 'Table':
        setCurrentValue('Table');
        break;
      case 'Paragraph':
        setCurrentValue('Paragraph');
        break;
      default:
    }
  };

  return (
    <Container active={active}>
      <Form onChange={onChangeForm}>
        <InpunRadio
          type="radio"
          name="name"
          id="6"
          value={'Diagrams'}
          defaultChecked={currentValue === 'Diagrams'}
        />
        <Lable htmlFor="6">Diagrams</Lable>

        <InpunRadio
          type="radio"
          name="name"
          id="7"
          value={'Graph'}
          defaultChecked={currentValue === 'Graph'}
        />
        <Lable htmlFor="7">Graph</Lable>

        <InpunRadio
          type="radio"
          name="name"
          id="8"
          value={'Table'}
          defaultChecked={currentValue === 'Table'}
        />
        <Lable htmlFor="8">Table</Lable>

        <InpunRadio
          type="radio"
          name="name"
          id="9"
          value={'Paragraph'}
          defaultChecked={currentValue === 'Paragraph'}
        />
        <Lable htmlFor="9">Paragraph</Lable>
      </Form>
    </Container>
  );
}

export default DropDownDiagram;
