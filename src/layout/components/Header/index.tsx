import React from 'react'
// UI components
import { AppBar, Box, Grid, Hidden } from '@mui/material'
// Own components
import { LogoComponent, WrapperContainerHeader } from './style'
import SidenavMenu from './components/SidenavMenu'
import HorizontalMenu from './components/HorizontalMenu'
// Assets
import Logo from '@Assets/logo/logo.svg'

const Header = () => {
    // ComponentRender
    return (
        <AppBar>
            <WrapperContainerHeader maxWidth="xl">
                <Box mt={'1rem'} mb={'1rem'}>
                    <Grid container alignItems={'center'}>
                        <Grid item xs={6} sm={4} md={1} lg={1} xl={1}>
                            <LogoComponent alt="company_logo" src={Logo} />
                        </Grid>
                        <Hidden only={['xl', 'lg', 'md']}>
                            <SidenavMenu />
                        </Hidden>
                        <Hidden only={['sm', 'xs']}>
                            <HorizontalMenu />
                        </Hidden>
                    </Grid>
                </Box>
            </WrapperContainerHeader>
        </AppBar>
    )
}

export default Header
