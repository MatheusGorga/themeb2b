import { useState } from 'react';
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
  DivSpinner,
} from './styles';

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasClick, setHasClick] = useState(false);
  const [hasLoading, setHasLoading] = useState(0);

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

        <Container>
          <ContainerDiv>
            <Title>Download pdf </Title>
            <br />
            <button title='ola mundo'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 2C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2H6ZM13 9V3.5L18.5 9H13Z'
                  fill='#1b144b'
                />
                <path
                  d='M18.3214 17.5385V17.7885H18.5714H21.4267L16 23.6326L10.5733 17.7885H13.4286H13.6786V17.5385V12.25H18.3214V17.5385Z'
                  fill='#4eb0e3'
                  stroke='white'
                  strokeWidth='0.5'
                />
              </svg>
            </button>
          </ContainerDiv>
          <ContainerDiv>
            <Title>Spinner controlado</Title>
            <br />

            {[1, 2, 3, 4, 5].map((k) => {
              return (
                <ButtonOut
                  key={k}
                  disabled={isLoading ? true : false}
                  onClick={() => {
                    setIsLoading(true);
                    setHasLoading(k);
                    setTimeout(() => {
                      console.log(k);
                      setIsLoading(false);
                    }, 5000);
                  }}
                >
                  {isLoading && k === hasLoading ? (
                    <DivSpinner />
                  ) : (
                    <Text5>Ola mundo</Text5>
                  )}
                </ButtonOut>
              );
            })}
          </ContainerDiv>
        </Container>

        <Container>
          <ContainerDiv>Testes</ContainerDiv>
          <ContainerDiv>Testes</ContainerDiv>
        </Container>
        <Container>
          <ContainerDiv>Testes</ContainerDiv>
        </Container>
      </MainBox>
    </>
  );
}

export default Main;
