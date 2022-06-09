import styled from 'styled-components';

export const MainBox = styled.div`
  height: 100vh;
  width: 80%;
  padding: ${(props) => props.theme.size.padding.pd3};
  margin: 0 auto;
  justify-content: center;
`;

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;

export const ContainerDiv = styled.div`
  width: 45%;
  margin-top: 30px;
  padding: ${(props) => props.theme.size.padding.pd3};
  background: ${(props) => props.theme.palette.primary.light};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: ${(props) => props.theme.size.borderRadius.br1};
  border: 1px solid ${(props) => props.theme.colors.whiteMiv};
  box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.05);
`;

export const ContainerItem = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
export const ContainerDivText = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const DivSpinner = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${(props) => props.theme.palette.primary.main};
  margin-left: -5px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ButtonSpinner = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${(props) => props.theme.palette.primary.main};
  margin-left: -5px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

/* Typographic */

export const Title = styled.h1`
  color: ${(props) => props.theme.palette.text.primary};
  display: flex;
  align-items: flex-start;
`;

export const Text1 = styled.h2`
  color: ${(props) => props.theme.palette.text.primary};
  display: flex;
  align-items: flex-start;
`;

export const Text2 = styled.h2`
  color: ${(props) => props.theme.palette.text.fuchsia};
  display: flex;
  align-items: flex-start;
`;

export const Text3 = styled.h3`
  color: ${(props) => props.theme.palette.primary.main};
  display: flex;
  align-items: flex-start;
`;

export const Text4 = styled.h4`
  color: ${(props) => props.theme.palette.primary.dark};
  display: flex;
  align-items: flex-start;
`;

export const Text5 = styled.h5`
  color: ${(props) => props.theme.palette.primary.dark};
  display: flex;
  align-items: flex-start;
`;

export const Text6 = styled.h6`
  color: ${(props) => props.theme.palette.primary.fuchsia};
  display: flex;
  align-items: flex-start;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.palette.text.primary};
  display: flex;
  align-items: flex-start;
`;

export const TextSmall = styled.small`
  color: ${(props) => props.theme.palette.text.fuchsia};
  display: flex;
  align-items: flex-start;
`;
