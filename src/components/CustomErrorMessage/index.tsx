import React from 'react'
import { Box, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import CustomTypography from '@Components/CustomTypography'
import { ErrorImage } from './style'
import theme from '@Styles/theme'
import ErrorDefaultImage from '@Assets/error/default.svg'

const CustomErrorMessage = () => {
    const { t } = useTranslation()

    return (
        <Grid py={8} alignItems="center" justifyContent="center" container>
            <Grid mb={2} textAlign="center" item xs={12}>
                <ErrorImage src={ErrorDefaultImage} alt={'error'} />
            </Grid>
            <Grid item xs={12}>
                <Box py="2rem">
                    <CustomTypography
                        color={theme.palette.error.main}
                        textAlign="center"
                        fontWeight={'bold'}
                    >
                        {t('common:errorMessage')}
                    </CustomTypography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CustomErrorMessage
