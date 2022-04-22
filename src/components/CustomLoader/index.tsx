import React from 'react'
import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SCLoader } from './style'
import CustomTypography from '@Components/CustomTypography'

const CustomLoader = () => {
    const { t } = useTranslation()

    return (
        <Grid py={8} alignItems="center" justifyContent="center" container>
            <Grid mb={2} textAlign="center" item xs={12}>
                <SCLoader color="inherit" />
            </Grid>
            <Grid item xs={12}>
                <CustomTypography textAlign="center">
                    {t('common:loading')}
                </CustomTypography>
            </Grid>
        </Grid>
    )
}

export default CustomLoader
