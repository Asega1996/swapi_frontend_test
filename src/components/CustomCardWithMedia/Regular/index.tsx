import React from 'react'
// UI Components
import { CardContent, CardMedia, Grid } from '@mui/material'
import { CustomCardWrapper } from './styles'
// Types
import { CustomCardWithMediaProps } from '../types'
// Own Components
import CustomTypography from '@Components/CustomTypography'
// Utils
import { getImageUrlFromArray } from '@Utils/getImageUrlFromArray'
import { getImagesArrayToSearch } from '@Utils/getImagesArrayToSearch'

const CustomCardWithMediaRegular: React.FC<CustomCardWithMediaProps> = ({
    title,
    topic,
    content,
}: CustomCardWithMediaProps) => {
    return (
        <CustomCardWrapper elevation={8}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <CardMedia
                        style={{ objectFit: 'scale-down' }}
                        component={'img'}
                        height="320"
                        image={getImageUrlFromArray(
                            getImagesArrayToSearch(topic),
                            title
                        )}
                        alt={title}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CardContent>
                        <CustomTypography
                            textAlign={'center'}
                            fontSize={'1.3rem'}
                            fontWeight={'bold'}
                        >
                            {title}
                        </CustomTypography>
                        {content}
                    </CardContent>
                </Grid>
            </Grid>
        </CustomCardWrapper>
    )
}

export default CustomCardWithMediaRegular
