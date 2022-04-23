import React from 'react'
// Own Components
import CustomTypography from '@Components/CustomTypography'
// UI Components
import { Box } from '@mui/material'
// Hooks
import { useTranslation } from 'react-i18next'
// Formatters
import { uppercase } from '@Utils/text-formatters'
import theme from '@Styles/theme'
// Types
import { VehicleContentProps } from './types'

const UNKNOWN = 'unknown'

export const VehiclesContent: React.FC<VehicleContentProps> = ({
    manufacturer,
    cargoCapacity,
    crew,
    price,
}: VehicleContentProps) => {
    // Hooks
    const { t } = useTranslation()

    return (
        <Box p={'1rem'}>
            <Box pb={'0.5rem'}>
                <CustomTypography
                    color={theme.palette.secondary.main}
                    textAlign={'center'}
                    fontWeight={'bold'}
                >
                    {uppercase(t('common:datasheet'))}
                </CustomTypography>
            </Box>
            <Box pb={'0.5rem'}>
                <CustomTypography
                    textAlign={'center'}
                    fontWeight={'bold'}
                    fontSize={'0.8rem'}
                >
                    {manufacturer}
                </CustomTypography>
            </Box>
            <Box pb={'0.5rem'}>
                <CustomTypography
                    textAlign={'center'}
                    fontWeight={'bold'}
                    fontSize={'0.8rem'}
                >
                    {t('common:price') + ':'}{' '}
                    {price !== UNKNOWN ? price : t('common:unknown')}
                </CustomTypography>
            </Box>
            <Box pb={'0.5rem'}>
                <CustomTypography
                    textAlign={'center'}
                    fontWeight={'bold'}
                    fontSize={'0.8rem'}
                >
                    {t('common:cargoCapacity') + ':'}{' '}
                    {cargoCapacity !== UNKNOWN
                        ? cargoCapacity
                        : t('common:unknown')}
                </CustomTypography>
            </Box>
            <Box pb={'0.5rem'}>
                <CustomTypography
                    textAlign={'center'}
                    fontWeight={'bold'}
                    fontSize={'0.8rem'}
                >
                    {t('common:crew') + ':'}{' '}
                    {crew !== UNKNOWN ? crew : t('common:unknown')}
                </CustomTypography>
            </Box>
        </Box>
    )
}
