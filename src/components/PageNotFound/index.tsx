import React from 'react'
// UI components
import { Container, Grid } from '@mui/material'
import PageNotFoundImg from '@Assets/page_not_found/404.jpg'
import CustomTypography from '@Components/CustomTypography'
// Translation hook
import { useTranslation } from 'react-i18next'
// Formatters
import { uppercase } from '@Utils/text-formatters'

const PageNotFound = () => {
    // Hooks
    const { t } = useTranslation()
    return (
        <Container>
            <Grid
                mt={'5rem'}
                container
                justifyContent={'center'}
                justifyItems={'center'}
            >
                <Grid item>
                    <img src={PageNotFoundImg} width="100%" height={'auto'} />
                </Grid>
                <Grid item xs={12}>
                    <CustomTypography fontSize={'1.5rem'} textAlign={'center'}>
                        {uppercase(t('common:page-not-found'))}
                    </CustomTypography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PageNotFound
