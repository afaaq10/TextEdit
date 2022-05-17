
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body{
  background-color:pink;
  color:${({ theme }) => theme.colors.body}
}
button{
    color:${({ theme }) => theme.colors.body}
}


`

export default GlobalStyle
