import ImageNotAvailable from '@Assets/error/noimage.png'

export const getImageUrlFromArray = (arrayOfImages: any[], name: string) => {
    const image = arrayOfImages.find((el) => el.name === name)
    if (image) {
        return image.imageUrl
    } else {
        return ImageNotAvailable
    }
}
