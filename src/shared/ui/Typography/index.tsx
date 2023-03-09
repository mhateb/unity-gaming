import { ReactNode } from 'react'

import {
  BodySmallStyled,
  BodyStyled,
  ButtonSmallTextStyled,
  ButtonTextStyled,
  Caption1Styled,
  Caption2Styled,
  D1Styled,
  D2Styled,
  D3Styled,
  H1Styled,
  H2Styled,
  H3Styled,
  H4Styled,
  H5Styled,
  H6Styled,
  MenuTextStyled,
  TitleStyled,
} from './styles'

type VariantsType = {
  d1: typeof D1Styled
  d2: typeof D2Styled
  d3: typeof D3Styled
  h1: typeof H1Styled
  h2: typeof H2Styled
  h3: typeof H3Styled
  h4: typeof H4Styled
  h5: typeof H5Styled
  h6: typeof H6Styled
  menu: typeof MenuTextStyled
  title: typeof TitleStyled
  caption1: typeof Caption1Styled
  caption2: typeof Caption2Styled
  body: typeof BodyStyled
  bodySmall: typeof BodySmallStyled
  button: typeof ButtonTextStyled
  buttonSmall: typeof ButtonSmallTextStyled
}

const variantsMap: VariantsType = {
  d1: D1Styled,
  d2: D2Styled,
  d3: D3Styled,
  h1: H1Styled,
  h2: H2Styled,
  h3: H3Styled,
  h4: H4Styled,
  h5: H5Styled,
  h6: H6Styled,
  menu: MenuTextStyled,
  title: TitleStyled,
  caption1: Caption1Styled,
  caption2: Caption2Styled,
  body: BodyStyled,
  bodySmall: BodySmallStyled,
  button: ButtonTextStyled,
  buttonSmall: ButtonSmallTextStyled,
}

type TypographyProps = {
  variant: keyof VariantsType
  className?: string
  children: ReactNode
}

const Typography = ({ variant, className, children }: TypographyProps) => {
  const Component = variant ? variantsMap[variant] : 'p'

  return <Component className={className}>{children}</Component>
}

export default Typography
