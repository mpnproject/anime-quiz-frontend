import { ThemeProvider } from 'styled-components'

import { Theme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { Layout } from './components/Layout'

export const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <h1>aaa</h1>
      </Layout>
    </ThemeProvider>
  )
}
