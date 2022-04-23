import React from 'react'
import { Box, CardContent, CardMedia } from '@mui/material'
import { CustomCardWrapper } from './styles'
import { CustomCardWithMediaProps } from '../types'
import CustomTypography from '@Components/CustomTypography'
import { getImageUrlFromArray } from '@Utils/getImageUrlFromArray'
import { getImagesArrayToSearch } from '@Utils/getImagesArrayToSearch'

const CustomCardWithMediaSmall: React.FC<CustomCardWithMediaProps> = ({
    title,
    topic,
    content,
}: CustomCardWithMediaProps) => {
    // Hooks
    const [fade, setFade] = React.useState(true)

    return (
        <CustomCardWrapper
            elevation={8}
            onClick={() => setFade(!fade)}
            sx={{ maxWidth: 345 }}
        >
            {fade ? (
                <CardMedia
                    component="img"
                    height="230"
                    image={getImageUrlFromArray(
                        getImagesArrayToSearch(topic),
                        title
                    )}
                    alt={title}
                />
            ) : (
                content
            )}
            <CardContent>
                <Box pt={1}>
                    <CustomTypography textAlign={'center'} fontSize={'1.5rem'}>
                        {title}
                    </CustomTypography>
                </Box>
            </CardContent>
        </CustomCardWrapper>
    )
}

export default CustomCardWithMediaSmall
