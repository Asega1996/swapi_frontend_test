import { api } from '.'

export const getDataFromNextUrl = async (urlNextPage: string) => {
    return await api.get(urlNextPage)
}
