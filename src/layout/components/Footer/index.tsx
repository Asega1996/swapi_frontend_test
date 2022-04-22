import React from 'react'
import CustomDivider from '@Components/CustomDivider'
import { Container } from '@mui/material'
import theme from '@Styles/theme'
import { WrapperContainerFooter } from './style'
import CustomTypography from '@Components/CustomTypography'
import { useTranslation } from 'react-i18next'
import { titlecase } from '@Utils/text-formatters'

const Footer = () => {
    // Hooks
    const { t } = useTranslation()

    // ComponentRender
    return (
        <WrapperContainerFooter>
            <CustomDivider width="100%" color={theme.palette.primary.main} />
            <Container maxWidth="xl">
                <CustomTypography textAlign={'center'} fontWeight={'600'}>
                    {titlecase(t('common:test'))}
                </CustomTypography>
            </Container>
        </WrapperContainerFooter>
    )
}

export default Footer
