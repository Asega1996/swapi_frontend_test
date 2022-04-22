import React from 'react'
// App screen routes
import AppRoutes from '../../../routes'
// UI components
import { Box, Container } from '@mui/material'

const Content = () => {
    return (
        <Box pt="2rem" mt="3rem">
            <Container maxWidth="xl">
                <AppRoutes />
            </Container>
        </Box>
    )
}

export default Content
