import React, { useEffect, useState } from 'react'
// UI components
import { Box, Grid, Pagination } from '@mui/material'
import CustomCardWithMedia from '@Components/CustomCardWithMedia/Regular'
import CustomTypography from '@Components/CustomTypography'
// Hooks
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// RootState
import { RootState } from '@Store/reducers'
import CustomLoader from '@Components/CustomLoader'
// Own Components
import CustomError from '@Components/CustomErrorMessage'
import { VehiclesContent } from './components/VehiclesContent'
import FilterStarships from './components/FilterVehicles'
// Constants
import { DATA_ITEMS_PER_PAGE } from './constants'
// Actions
import { vehiclesActions } from '@Store/actions/vehicles'
// Utils
import { scrollToTopOfTheScreen } from '@Utils/scrollToTopOfTheScreen'
import { sortByCriteria } from '@Utils/sortByCriteria'

const VehiclesScreen = () => {
    // Hooks
    const { t } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(vehiclesActions.fetchVehicles())
        return () => {
            dispatch(vehiclesActions.resetVehicles())
        }
    }, [])
    const { fetching, availableVehicles, error } = useSelector(
        (state: RootState) => state.vehicles
    )
    const [currentPage, setCurrentPage] = useState(1)
    const [inputFilter, setInputFilter] = useState('')
    const [ordenationFilter, setOrdenationFilter] = useState(0)

    // Aux Functions
    const getDefaultTotalCount = () => {
        return Math.ceil(availableVehicles.totalElements / DATA_ITEMS_PER_PAGE)
    }

    const getFilteredByInputTotalCount = () => {
        return Math.ceil(
            availableVehicles.data.filter((el: any) =>
                el.name.includes(inputFilter)
            ).length / DATA_ITEMS_PER_PAGE
        )
    }

    return (
        <Box mt="2rem">
            <Box mb="2rem">
                <CustomTypography textAlign={'center'} fontSize={'2rem'}>
                    {t('vehicles:title')}
                </CustomTypography>
            </Box>
            {fetching && <CustomLoader />}
            {error && <CustomError />}
            {availableVehicles.data && (
                <FilterStarships
                    setInputFilter={setInputFilter}
                    setCurrentPage={setCurrentPage}
                    setOrdenationFilter={setOrdenationFilter}
                />
            )}
            <Grid container spacing={2}>
                {availableVehicles.data &&
                    sortByCriteria(availableVehicles.data, ordenationFilter)
                        .filter((el: any) => el.name.includes(inputFilter))
                        .slice(
                            (currentPage - 1) * DATA_ITEMS_PER_PAGE,
                            currentPage * DATA_ITEMS_PER_PAGE
                        )
                        .map((item: any) => (
                            <Grid
                                key={item.name}
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={6}
                                xl={6}
                            >
                                <CustomCardWithMedia
                                    topic="vehicles"
                                    title={item.name}
                                    content={
                                        <VehiclesContent
                                            manufacturer={item.manufacturer}
                                            price={item.cost_in_credits}
                                            cargoCapacity={item.cargo_capacity}
                                            crew={item.crew}
                                        />
                                    }
                                />
                            </Grid>
                        ))}
                {availableVehicles.data &&
                    inputFilter.length > 0 &&
                    availableVehicles.data.filter((el: any) =>
                        el.name.includes(inputFilter)
                    ).length === 0 && (
                        <Grid
                            py={2}
                            alignItems="center"
                            justifyContent="center"
                            container
                        >
                            <CustomTypography>
                                {t('common:noResults')}
                            </CustomTypography>
                        </Grid>
                    )}
                {availableVehicles.data && (
                    <Grid
                        py={2}
                        alignItems="center"
                        justifyContent="center"
                        container
                    >
                        <Pagination
                            key={inputFilter}
                            count={
                                inputFilter.length > 0
                                    ? getFilteredByInputTotalCount()
                                    : getDefaultTotalCount()
                            }
                            showFirstButton
                            showLastButton
                            onChange={(event, page) => {
                                setCurrentPage(page)
                                scrollToTopOfTheScreen()
                            }}
                        />
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default VehiclesScreen
