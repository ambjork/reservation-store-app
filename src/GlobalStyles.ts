import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  scrollbar-width: thin;
  scrollbar-color: whitesmoke;
}

body{
  font-family: 'Lexend Deca', sans-serif;
  font-size: 16px;
  background-color: whitesmoke;
  
  &::-webkit-scrollbar {
    width: 0.4em;
  }
  
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9bcd6a;
    outline: 1px solid slategrey;
    border-radius: 4px;
  }
}





`;

export default GlobalStyle;
