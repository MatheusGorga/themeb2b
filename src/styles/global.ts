import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Work Sans, sans-serif ;
}

body{
  background: ${(props) => props.theme.palette.primary.light} ;
  font-size: 16px ;
  color: #f8f8f8 ;
  
}

`;
