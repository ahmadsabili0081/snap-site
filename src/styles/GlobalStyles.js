import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500&display=swap');
  :root{
    --color-text : hsl(0, 0%, 98%);
    --gray : hsl(0, 0%, 41%);
    --black  :hsl(0, 0%, 8%);
  }
  html{
    font-size: 15px;
  }
  body{
    background-color: var(--color-text);
  }
  *,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    cursor: pointer;
    font-family: 'Epilogue', sans-serif;
  }
  ul{
    list-style-type: none;
  }
`;
export default GlobalStyles