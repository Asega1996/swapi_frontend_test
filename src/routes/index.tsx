import React from 'react'
// Routing Components
import { Route, Routes } from 'react-router-dom'
// Screens
import PlanetScreen from '@Screens/PlanetsScreen'
import StarshipsScreen from '@Screens/StarshipsScreen'
import PageNotFound from '@Components/PageNotFound'
import VehiclesScreen from '@Screens/VehiclesScreen'

const AppRoutes = () => {
    return (
        <Routes>
            {/* Unmatched Route */}
            <Route path="*" element={<PageNotFound />} />

            {/* Public Routes */}
            <Route path="/" element={<PlanetScreen />} />
            <Route path="/starships" element={<StarshipsScreen />} />
            <Route path="/vehicles" element={<VehiclesScreen />} />
        </Routes>
    )
}

export default AppRoutes
