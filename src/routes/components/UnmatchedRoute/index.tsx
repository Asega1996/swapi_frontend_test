import React from 'react'
// Routing components
import { Route } from 'react-router-dom'
// UI components
import { Container, Grid } from '@mui/material'
import PageNotFound from '@Assets/page_not_found/404.jpg'
import CustomTypography from '@Components/CustomTypography'
// Translation hook
import { useTranslation } from 'react-i18next'
// Formatters
import { uppercase } from '@Utils/text-formatters'

const UnmatchedRoute = () => {
    // Hooks
    const { t } = useTranslation()
    return (
        <Route
            path="*"
            element={
                <Container>
                    <Grid
                        mt={'5rem'}
                        container
                        justifyContent={'center'}
                        justifyItems={'center'}
                    >
                        <Grid item>
                            <img
                                src={PageNotFound}
                                width="100%"
                                height={'auto'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTypography
                                fontSize={'1.5rem'}
                                textAlign={'center'}
                            >
                                {uppercase(t('common:page-not-found'))}
                            </CustomTypography>
                        </Grid>
                    </Grid>
                </Container>
            }
        />
    )
}

export default UnmatchedRoute
