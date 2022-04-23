import React from 'react'
// UI components
import { Box, Drawer, Grid } from '@mui/material'
import { CustomNavLink, IconButtonHeader } from '../../style'
import MenuIcon from '@mui/icons-material/Menu'
// Own Components
import CustomLanguageSelector from '@Components/CustomLanguageSelector'
import CustomTypography from '@Components/CustomTypography'
// Menu entries
import { MENU_ENTRIES } from '../../constants'
// Hooks
import { useTranslation } from 'react-i18next'
// Transformations
import { uppercase } from '@Utils/text-formatters'

const SidenavMenu = () => {
    // Hooks
    const [open, setOpen] = React.useState(false)
    const { t } = useTranslation()

    return (
        <>
            <Grid item xs={5} sm={7} md={9} lg={10} xl={10} />
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <IconButtonHeader
                    onClick={() => setOpen(!open)}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButtonHeader>
                <Drawer
                    open={open}
                    anchor="right"
                    onClose={() => setOpen(!open)}
                >
                    <Box
                        alignItems={'center'}
                        alignContent="center"
                        minWidth={175}
                        mt="1rem"
                        px="1.5rem"
                    >
                        <CustomLanguageSelector />
                        {MENU_ENTRIES.map((item, index) => (
                            <CustomNavLink to={item.linkTo} key={index}>
                                <Box my="2rem">
                                    <CustomTypography
                                        textAlign={'center'}
                                        fontWeight={'bold'}
                                    >
                                        {uppercase(t(item.i18nCode))}
                                    </CustomTypography>
                                </Box>
                            </CustomNavLink>
                        ))}
                    </Box>
                </Drawer>
            </Grid>
        </>
    )
}

export default SidenavMenu
