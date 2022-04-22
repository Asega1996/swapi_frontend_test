import React from 'react'
// Routing Components
import { Route, Routes } from 'react-router-dom'
//import UnmatchedRoute from './components/UnmatchedRoute'
// Screens
import PlanetScreen from '@Screens/PlanetsScreen'
import StarshipsScreen from '@Screens/StarshipsScreen'

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PlanetScreen />} />
            <Route path="/starships" element={<StarshipsScreen />} />
            <Route path="/vehicles" element={<>div</>} />

            {/* Unmatched Route 
            <UnmatchedRoute />
            */}
        </Routes>
    )
}

export default AppRoutes
