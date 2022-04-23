import React, { useEffect, useState } from 'react'
// UI components
import { Box, Grid, Pagination } from '@mui/material'
import CustomCardWithMedia from '@Components/CustomCardWithMedia/Small'
import CustomTypography from '@Components/CustomTypography'
// Hooks
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// RootState
import { RootState } from '@Store/reducers'
// Own Components
import { PlanetContent } from './components/PlanetContent'
import CustomLoader from '@Components/CustomLoader'
import CustomError from '@Components/CustomErrorMessage'
// Constants
import { DATA_ITEMS_PER_PAGE } from './constants'
// Actions
import { planetActions } from '@Store/actions/planets'
// Utils
import { scrollToTopOfTheScreen } from '@Utils/scrollToTopOfTheScreen'

const PlanetScreen = () => {
    // Hooks
    const [currentPage, setCurrentPage] = useState(1)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(planetActions.fetchPlanets())
        return () => {
            dispatch(planetActions.resetPlanets())
        }
    }, [])
    const { fetching, availablePlanets, error } = useSelector(
        (state: RootState) => state.planets
    )

    return (
        <Box mt="2rem">
            <Box mb="2rem">
                <CustomTypography textAlign={'center'} fontSize={'2rem'}>
                    {t('planets:title')}
                </CustomTypography>
            </Box>
            {fetching && <CustomLoader />}
            {error && <CustomError />}
            <Grid container spacing={2}>
                {availablePlanets.data &&
                    availablePlanets.data
                        .slice(
                            (currentPage - 1) * DATA_ITEMS_PER_PAGE,
                            currentPage * DATA_ITEMS_PER_PAGE
                        )
                        .map((item: any) => (
                            <Grid
                                key={item.name}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                xl={2}
                            >
                                <CustomCardWithMedia
                                    topic="planet"
                                    title={item.name}
                                    content={
                                        <PlanetContent
                                            diameter={item.diameter}
                                            population={item.population}
                                            orbitalPeriod={item.orbital_period}
                                            rotationPeriod={
                                                item.rotation_period
                                            }
                                        />
                                    }
                                />
                            </Grid>
                        ))}
                {availablePlanets.data && (
                    <Grid
                        py={2}
                        alignItems="center"
                        justifyContent="center"
                        container
                    >
                        <Pagination
                            count={Math.ceil(
                                availablePlanets.totalElements /
                                    DATA_ITEMS_PER_PAGE
                            )}
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

export default PlanetScreen
