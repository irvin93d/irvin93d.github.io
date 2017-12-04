import {} from 'styled-components/macro'

declare module 'styled-components/macro' {
  export interface DefaultTheme {
    //borderRadius: string;

    colors: {
      emphasize: string
      primary: string
      text: string
    }
    fonts: {
      primary: string
    }
    gaps: {
      none: number
      nano: number
      small: number
      medium: number
      large: number
      huge: number
    }
  }
}
