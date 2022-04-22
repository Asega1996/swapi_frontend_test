import React from 'react'
// UI components
import { Box, Grid } from '@mui/material'
// Own Components
import CustomLanguageSelector from '@Components/CustomLanguageSelector'
import { CustomNavLink } from '../../style'
// Menu Entries
import { MENU_ENTRIES } from '../../constants'
// Formatters
import { uppercase } from '@Utils/text-formatters'
// Hooks
import { useTranslation } from 'react-i18next'

const HorizontalMenu = () => {
    // Hooks
    const { t } = useTranslation()

    return (
        <>
            <Grid item xs={5} sm={7} md={2} lg={3} xl={3} />
            <Grid
                display={'flex'}
                alignItems="center"
                justifyContent="center"
                container
                item
                xs={5}
                sm={7}
                md={7}
                lg={6}
                xl={6}
            >
                {MENU_ENTRIES.map((item, index) => (
                    <CustomNavLink key={index} to={item.linkTo}>
                        <Box display={'flex'} px="1.5rem">
                            <>
                                {<item.icon fontSize="small" />}
                                <Box px="0.5rem">
                                    {uppercase(t(item.i18nCode))}
                                </Box>
                            </>
                        </Box>
                    </CustomNavLink>
                ))}
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <CustomLanguageSelector />
            </Grid>
        </>
    )
}

export default HorizontalMenu
