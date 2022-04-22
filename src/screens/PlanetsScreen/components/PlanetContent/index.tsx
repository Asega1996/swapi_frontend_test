import React from 'react'
//Hooks
import { useTranslation } from 'react-i18next'
// Types
import { PlanetContentProps } from './types'
// Formatters
import { uppercase } from '@Utils/text-formatters'
// UI components
import { Box } from '@mui/material'
import CustomTypography from '@Components/CustomTypography'

const UNKNOWN = 'unknown'

export const PlanetContent: React.FC<PlanetContentProps> = ({
    orbitalPeriod,
    diameter,
    rotationPeriod,
    population,
}: PlanetContentProps) => {
    const { t } = useTranslation()
    return (
        <Box p={'1rem'} height={230}>
            <Box pb={'0.5rem'}>
                <CustomTypography textAlign={'center'} fontWeight={'bold'}>
                    {uppercase(t('planets:diameter'))}
                </CustomTypography>
                <CustomTypography textAlign={'center'}>
                    {diameter !== UNKNOWN ? diameter : t('common:unknown')}
                </CustomTypography>
            </Box>
            <Box pb={'0.5rem'}>
                <CustomTypography textAlign={'center'} fontWeight={'bold'}>
                    {uppercase(t('planets:population'))}
                </CustomTypography>
                <CustomTypography textAlign={'center'}>
                    {population !== UNKNOWN ? population : t('common:unknown')}
                </CustomTypography>
            </Box>
            <Box pb={'0.5rem'}>
                <CustomTypography textAlign={'center'} fontWeight={'bold'}>
                    {uppercase(t('planets:rotationPeriod'))}
                </CustomTypography>
                <CustomTypography textAlign={'center'}>
                    {rotationPeriod !== UNKNOWN
                        ? rotationPeriod
                        : t('common:unknown')}
                </CustomTypography>
            </Box>
            <Box pb={'0.5rem'}>
                <CustomTypography textAlign={'center'} fontWeight={'bold'}>
                    {uppercase(t('planets:orbitalPeriod'))}
                </CustomTypography>
                <CustomTypography textAlign={'center'}>
                    {orbitalPeriod !== UNKNOWN
                        ? orbitalPeriod
                        : t('common:unknown')}
                </CustomTypography>
            </Box>
        </Box>
    )
}
