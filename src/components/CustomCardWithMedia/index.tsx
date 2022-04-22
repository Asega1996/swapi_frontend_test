import React from 'react'
import { CardContent, CardMedia } from '@mui/material'
import { CustomCardWrapper } from './styles'
import { CustomCardWithMediaProps } from './types'
import CustomTypography from '@Components/CustomTypography'
import { getImageUrlFromArray } from '@Utils/getImageUrlFromArray'
import { getImagesArrayToSearch } from '@Utils/getImagesArrayToSearch'

const CustomCardWithMedia: React.FC<CustomCardWithMediaProps> = ({
    title,
    topic,
    content,
}: CustomCardWithMediaProps) => {
    // Hooks
    const [fade, setFade] = React.useState(true)

    return (
        <CustomCardWrapper
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
                <CustomTypography textAlign={'center'} variant="h5">
                    {title}
                </CustomTypography>
            </CardContent>
        </CustomCardWrapper>
    )
}

export default CustomCardWithMedia
