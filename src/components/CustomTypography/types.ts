import { TypographyProps } from '@mui/material'

type TextAlignmentType = 'center' | 'inherit' | 'justify' | 'left' | 'right'

export type CustomTypographyProps = {
    color?: string
    align?: TextAlignmentType
    classes?: string
    fontFamily?: string
    fontStyle?: string
    fontSize?: string
    fontWeight?: string
    letterSpacing?: string
    lineHeight?: string
    clickable?: string
} & TypographyProps

export type SCTypographyProps = {
    color?: string
    align?: TextAlignmentType
    classes?: string
    fontfamily?: string
    fontstyle?: string
    fontsize?: string
    fontweight?: string
    letterspacing?: string
    lineheight?: string
    clickable?: string
}
