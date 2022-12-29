import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0; padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.black};
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  color:${(props) => props.theme.white.darker};
  line-height: 1.2;
  
  background-color: black;
}

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.white.lighter};
  }

  button,select {
    &:not(:disabled){
      cursor: pointer;
    }
  }

`;

export default GlobalStyle;
