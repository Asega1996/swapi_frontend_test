import theme from '@Styles/theme'
import React from 'react'
import { SCTypography } from './styles'
import { CustomTypographyProps } from './types'

const CustomTypography: React.FC<CustomTypographyProps> = (
    props: CustomTypographyProps
) => {
    const {
        align,
        color,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight,
        letterSpacing,
        lineHeight,
        children,
        clickable,
        id,
    } = props

    // ComponentRender
    return (
        <SCTypography
            {...props}
            id={id}
            align={align}
            color={color}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontStyle={fontStyle}
            fontWeight={fontWeight}
            letterSpacing={letterSpacing}
            lineHeight={lineHeight}
            clickable={clickable}
        >
            {children}
        </SCTypography>
    )
}

CustomTypography.defaultProps = {
    align: 'left',
    color: theme.palette.primary.main,
    fontFamily: 'inherit',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: '0',
    lineHeight: '1.5rem',
    clickable: 'inherit',
}

export default CustomTypography
