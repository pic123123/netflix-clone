import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0; padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.black};
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
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
