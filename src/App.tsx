import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components/macro'

import { VStack } from './components/Stack'
import Profile from './Profile'
import Projects from './Projects'

const theme: DefaultTheme = {
  colors: {
    primary: '#118bff',
   text: '#292b2c',
    emphasize: '#0275d8',
  },
  fonts: {
    primary: 'Courier New, Courier, monospace',
  },
  gaps: {
    none: 0,
    nano: 4,
    small: 8,
    medium: 16,
    large: 32,
    huge: 64,
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Styles>
        <VStack gap="large" justifyContent="flex-start">
          <Profile />
          <Projects />
        </VStack>
      </Styles>
    </ThemeProvider>
  )
}

const GlobalStyles = createGlobalStyle`
  html {
    display: flex;
    height: 100%;
    min-width: 100%;
  }
  body {
    display: flex;
    flex: 1;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    flex: 1;
  }

  h1 {
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
  }
  h2 {
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    line-height: 1.5;
    text-align: justify;
    max-width: 576px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.emphasize};
      text-decoration: underline;
    }
  }
  li {
  text-align: left;
  max-width: 576px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  img {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    max-width: 576px;
    height: auto;
  }
`

const Styles = styled.div`
  flex: 1;
  padding: ${({ theme: { gaps } }) => gaps.large}px;
`

export default App
