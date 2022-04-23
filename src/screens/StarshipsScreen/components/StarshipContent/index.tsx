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
import { StarshipContentProps } from './types'

const UNKNOWN = 'unknown'

export const StarshipContent: React.FC<StarshipContentProps> = ({
    manufacturer,
    cargoCapacity,
    crew,
    price,
}: StarshipContentProps) => {
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
                    {uppercase(t('starships:datasheet'))}
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
                    {t('starships:price') + ':'}{' '}
                    {price !== UNKNOWN ? price : t('common:unknown')}
                </CustomTypography>
            </Box>
            <Box pb={'0.5rem'}>
                <CustomTypography
                    textAlign={'center'}
                    fontWeight={'bold'}
                    fontSize={'0.8rem'}
                >
                    {t('starships:cargoCapacity') + ':'}{' '}
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
                    {t('starships:crew') + ':'}{' '}
                    {crew !== UNKNOWN ? crew : t('common:unknown')}
                </CustomTypography>
            </Box>
        </Box>
    )
}
