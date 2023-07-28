import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { BlogProvider } from './context/blog'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
