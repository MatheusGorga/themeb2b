import styled from 'styled-components';

export const ButtonIn = styled.button`
  height: 50px;
  width: 150px;
  color: ${(props) => props.theme.palette.primary.light};
  font-size: ${(props) => props.theme.size.text.tx2};
  padding: ${(props) => props.theme.size.padding.pd3};
  border-radius: ${(props) => props.theme.size.borderRadius.br1};
  border: none;
  background: ${(props) => props.theme.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const ButtonOut = styled.button`
  height: 50px;
  width: 150px;
  color: ${(props) => props.theme.palette.primary.fuchsia};
  font-size: ${(props) => props.theme.size.text.tx2};
  padding: ${(props) => props.theme.size.padding.pd3};
  border-radius: ${(props) => props.theme.size.borderRadius.br1};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;
