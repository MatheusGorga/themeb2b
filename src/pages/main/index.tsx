import { ButtonIn, ButtonOut } from '../../components/Button/styles';
import {
  MainBox,
  Container,
  ContainerDiv,
  Title,
  Text1,
  Text2,
  Text3,
  Text4,
  Text5,
  Text6,
  Paragraph,
  TextSmall,
  ContainerItem,
} from './styles';

function Main() {
  return (
    <>
      <MainBox>
        <Title className='tituloG'> DESIGN SYSTEM </Title>

        <Container>
          <ContainerDiv>
            <Title>BUTTONS</Title>
            <br />
            <ContainerItem>
              <ButtonIn>Confirmar</ButtonIn>
              <ButtonIn>Concluído</ButtonIn>
              <ButtonIn>Salvar</ButtonIn>
            </ContainerItem>

            <ContainerItem>
              <ButtonOut>Cancelar</ButtonOut>
              <ButtonOut>Fechar</ButtonOut>
            </ContainerItem>
          </ContainerDiv>

          <ContainerDiv>
            <Title>Tipographia</Title>
            <br />
            <ContainerItem>
              <Text1>H1: Lorem ipsum dolor sit amet</Text1>{' '}
            </ContainerItem>
            <ContainerItem>
              <Text2>H2: Lorem ipsum dolor sit amet</Text2>
            </ContainerItem>
            <ContainerItem>
              <Text3>H3: Lorem ipsum dolor sit amet</Text3>
            </ContainerItem>
            <ContainerItem>
              <Text4>H4: Lorem ipsum dolor sit amet</Text4>
            </ContainerItem>
            <ContainerItem>
              <Text5>H5: Lorem ipsum dolor sit amet</Text5>
            </ContainerItem>
            <ContainerItem>
              <Text6>H6: Lorem ipsum dolor sit amet</Text6>
            </ContainerItem>

            <ContainerItem>
              <Paragraph>Paragrafo: Lorem ipsum dolor sit amet</Paragraph>
            </ContainerItem>
            <ContainerItem>
              <TextSmall>Small: Lorem ipsum dolor sit amet</TextSmall>
            </ContainerItem>
          </ContainerDiv>
        </Container>
      </MainBox>
    </>
  );
}

export default Main;
