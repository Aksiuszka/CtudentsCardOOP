import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
*,*::before, *::after{
  padding:0;
  margin: 0;
  box-sizing: border-box;
}
& #root{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
body{
  background-image: ${({ theme }) => theme.palette.background.mainGradient};
  font-family: ${({ theme }) => theme.fontFamily.main};
}`;

export default Global;
