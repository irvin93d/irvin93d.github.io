import { useEffect, useState } from 'react'
import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components/macro'

import { FadeIn } from './components/FadeIn'
import { HStack, VStack } from './components/Stack'
import Toggle from './components/Toggle'
import useThemeDetector from './hooks/useThemeDetectors'
import Profile from './Profile'
import Projects from './Projects'
import Work from './work/Work'

const fonts: DefaultTheme['fonts'] = { primary: 'Courier New, Courier, monospace' }

const gaps: DefaultTheme['gaps'] = { none: 0, nano: 4, small: 8, medium: 16, large: 32, huge: 64 }
const darkColors: DefaultTheme['colors'] = {
  primary: '#00B2FF',
  gray1: '#414656',
  background: '#20262D',
  gray2: '#A6ABBD',
  text: '#ffffff',
  emphasize: '#00CBFC',
}
const lightColors: DefaultTheme['colors'] = {
  primary: '#118bff',
  gray1: '#A6ABBD',
  gray2: '#414656',
  text: '#414656',
  emphasize: '#0275d8',
  background: '#FFFFFF',
}
const darkTheme: DefaultTheme = { colors: darkColors, fonts, gaps }
const lightTheme: DefaultTheme = { colors: lightColors, fonts, gaps }

const App = () => {
  const preferredTheme = useThemeDetector()
  const [useDarkTheme, setDarkTheme] = useState(preferredTheme)
  useEffect(() => {
    setDarkTheme(preferredTheme)
  }, [preferredTheme])

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Styles>
        <FadeIn>
          <VStack gap="large" justifyContent="flex-start">
            <ToggleWrapper>
              <p>{useDarkTheme ? '✨' : '💡'}</p>
              <Toggle value={useDarkTheme} onChange={setDarkTheme} />
            </ToggleWrapper>
            <Profile />
            <Work />
            <Projects />
          </VStack>
        </FadeIn>
      </Styles>
    </ThemeProvider>
  )
}

const ToggleWrapper = styled(HStack)`
  position: absolute;
  right: ${({ theme }) => theme.gaps.large}px;
`

const GlobalStyles = createGlobalStyle`
  html {
    display: flex;
    height: 100%;
    min-width: 100%;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex: 1;
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    transition: background-color 500ms ease, color 500ms ease;
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
  position: relative;
  flex: 1;
  padding: ${({ theme: { gaps } }) => gaps.large}px;
`

export default App
