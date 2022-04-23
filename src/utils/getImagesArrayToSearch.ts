import { VEHICLES_IMAGES } from '../constants/vehicles'
import { PLANETS_IMAGES } from '../constants/planets'
import { STARSHIPS_IMAGES } from '../constants/starships'

export const getImagesArrayToSearch = (keyword: string) => {
    switch (keyword) {
        case 'planets':
            return PLANETS_IMAGES
        case 'starships':
            return STARSHIPS_IMAGES
        case 'vehicles':
            return VEHICLES_IMAGES
        default:
            return PLANETS_IMAGES
    }
}
