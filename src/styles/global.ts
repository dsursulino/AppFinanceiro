import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`  * {
    margin: 0;
    padding: 0;

  }

  html, body {
    min-height: 100vh;
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    overflow:auto;
  }
  #__next {
    min-height:100vh;
    width:100%;
    overflow:auto;
  }

  *::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

*::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

*::-webkit-scrollbar-thumb
{
	background-color: #000000;
}

`