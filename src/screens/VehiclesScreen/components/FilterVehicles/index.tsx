import React from 'react'
// UI components
import { Box, Grid, MenuItem, OutlinedInput, Select } from '@mui/material'
// Hooks
import { useTranslation } from 'react-i18next'
// Constants
import { AVAILABLE_FILTERS } from './constants'
import { FilterVehiclesProps } from './types'

const FilterVehicles: React.FC<FilterVehiclesProps> = ({
    setInputFilter,
    setCurrentPage,
    setOrdenationFilter,
}: FilterVehiclesProps) => {
    const { t } = useTranslation()
    return (
        <Box mb="2rem">
            <Grid spacing={3} container justifyContent={'space-between'}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <OutlinedInput
                        fullWidth
                        placeholder={t('vehicles:searchByName')}
                        onChange={(event) => {
                            setCurrentPage(1)
                            setInputFilter(event.target.value)
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Select
                        placeholder="Filters"
                        onChange={(event) =>
                            setOrdenationFilter(event.target.value)
                        }
                        fullWidth
                        defaultValue={AVAILABLE_FILTERS[0].value}
                    >
                        {AVAILABLE_FILTERS.map((item) => (
                            <MenuItem key={item.key} value={item.value}>
                                {t(item.name)}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FilterVehicles
