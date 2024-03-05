import { ThemeProvider } from 'styled-components'

import { Theme } from './styles/theme'
import { GlobalStyle } from './styles/global'

export const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
