import UnnamedPlanet from '@Assets/planets/Unnamed.png'

export const getImageUrlFromArray = (arrayOfImages: any[], name: string) => {
    const image = arrayOfImages.find((el) => el.name === name)
    if (image) {
        return image.imageUrl
    } else {
        return UnnamedPlanet
    }
}
