import { Inter, Poppins } from "next/font/google"
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/appSlice/configs/globalStyles'
import theme from '@/appSlice/configs/theme'

const poppinsFont = Poppins({
  weight: ['400', '500', '600', '700'],
  style: 'normal',
})

const interFont = Inter({
  weight: ['400', '500', '600', '700'],
  style: 'normal',
})

type ProvidersProps = {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <main className={poppinsFont.className + ' ' + interFont.className}>
          {children}
        </main>
      </ThemeProvider>
    </>
  )
}

export default Providers
