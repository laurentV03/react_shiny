import { useContext } from 'react'
import { ThemeContext } from '../context/index'

import { createGlobalStyle } from 'styled-components/macro'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        /* Ici cette syntaxe revient au même que
        background-color: ${({ props }) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
        */
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? 'black' : 'white'};
        color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
        margin: 0;  
    }
`

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
