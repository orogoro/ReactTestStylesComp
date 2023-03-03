import {
  Container,
  Input,
  Lable,
  ContainerInput,
} from './DropDownTable.styled';

function DropDownTable({ active }) {
  return (
    <Container active={active}>
      <ContainerInput>
        <Input type="checkbox" id="checkbox1" />
        <Lable htmlFor="checkbox1">Source</Lable>
      </ContainerInput>
      <ContainerInput>
        <Input type="checkbox" id="checkbox2" defaultChecked />
        <Lable htmlFor="checkbox2">Card model</Lable>
      </ContainerInput>
      <ContainerInput>
        <Input type="checkbox" id="checkbox3" />
        <Lable htmlFor="checkbox3">Card number</Lable>
      </ContainerInput>
      <ContainerInput>
        <Input type="checkbox" id="checkbox4" defaultChecked />
        <Lable htmlFor="checkbox4">Card name</Lable>
      </ContainerInput>
      <ContainerInput>
        <Input type="checkbox" id="checkbox5" defaultChecked />
        <Lable htmlFor="checkbox5">Type</Lable>
      </ContainerInput>
      <ContainerInput>
        <Input type="checkbox" id="checkbox6" defaultChecked />
        <Lable htmlFor="checkbox6">Limited</Lable>
      </ContainerInput>
      <ContainerInput>
        <Input type="checkbox" id="checkbox7" defaultChecked />
        <Lable htmlFor="checkbox7">№ Operations</Lable>
      </ContainerInput>
    </Container>
  );
}

export default DropDownTable;
