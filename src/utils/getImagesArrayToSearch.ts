import { PLANETS_IMAGES } from '@Components/CustomCardWithMedia/constants'

export const getImagesArrayToSearch = (keyword: string) => {
    switch (keyword) {
        case 'planets':
            return PLANETS_IMAGES
        default:
            return PLANETS_IMAGES
    }
}
