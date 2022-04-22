import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const PRIMARY_COLOR = '#00142B'
const SECONDARY_COLOR = '#E84B1B'
const DANGER_COLOR = '#dc3545'
const WARNING_COLOR = '#ffc107'

let theme = createTheme({
    palette: {
        primary: { main: PRIMARY_COLOR },
        secondary: { main: SECONDARY_COLOR },
        error: { main: DANGER_COLOR },
        warning: { main: WARNING_COLOR },
    },
})
theme = responsiveFontSizes(theme)

export default theme
