import { Grid } from '@mui/material'
import theme from '@Styles/theme'
import React from 'react'
import { SCDivider } from './styles'
import { CustomDividerProps } from './types'

const CustomDivider: React.FC<CustomDividerProps> = (
    props: CustomDividerProps
) => {
    const { color, width, mb, mt } = props
    // ComponentRender
    return (
        <Grid marginTop={mt!} mb={mb!}>
            <SCDivider bgcolor={color!} width={width!} />
        </Grid>
    )
}

CustomDivider.defaultProps = {
    color: theme.palette.primary.main,
    width: '2.25rem',
    mt: '1rem',
    mb: '1rem',
}

export default CustomDivider
